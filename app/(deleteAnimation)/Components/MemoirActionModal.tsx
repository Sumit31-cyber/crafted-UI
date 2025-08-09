import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";
import Animated, {
  SlideInRight,
  SlideOutRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import CustomText from "@/components/CustomText";
import MemoirCard from "./MemoirCard";
import { useSharedState } from "@/context/SharedContext";
import { getCardHeight, getCardWidth } from "@/utils/functions";
import { _horizontalPadding, SCREEN_WIDTH } from "@/utils/constant";
import { LayoutType } from "@/constants/types";

const ANIMATION_CONFIG = {
  DURATIONS: {
    CARD_ANIMATION: 500,
    BACKGROUND_FADE: 300,
    ROTATION: 600,
    CLOSE_DELAY: 400,
  },
  ROTATION_ANGLE: 5,
  CARD_OFFSET: 10,
  CARD_DELETE_OFFSET: 20,
} as const;

const BLUR_CONFIG = {
  INTENSITY: 20,
  GRADIENT_COLORS: ["#4a6dd480", "#4a6dd4"] as const,
} as const;

const ACTION_CONFIG = {
  ANIMATION_DELAY_MULTIPLIER: 50,
  SPRING_DAMPING: { enter: 14, exit: 12 },
} as const;

const ACTIONS = [
  { id: 0, title: "📌 Pin", action: "pin" },
  { id: 1, title: "🔒 Lock", action: "lock" },
  { id: 2, title: "📝 Edit", action: "edit" },
  { id: 3, title: "🧑‍🤝‍🧑 Contributors", action: "contributors" },
  { id: 4, title: "⏸️ Pause", action: "pause" },
  { id: 5, title: "🗑️ Delete", action: "delete" },
] as const;

type ActionType = (typeof ACTIONS)[number]["action"];

interface MemoirActionModalProps {
  layout: LayoutType;
  onPress: () => void;
  onActionSelect?: (action: ActionType) => void;
}

const MemoirActionModal: React.FC<MemoirActionModalProps> = ({
  layout,
  onPress,
  onActionSelect,
}) => {
  const sharedX = useSharedValue(layout.x);
  const sharedY = useSharedValue(layout.y);
  const backgroundOpacity = useSharedValue(0);
  const rotate = useSharedValue(0);

  const [showActions, setShowActions] = useState(true);

  const { selectedMemoirItem, setIsSelectionEnabled } = useSharedState();

  const cardDimensions = useMemo(
    () => ({
      width: getCardWidth(),
      height: getCardHeight(),
    }),
    []
  );

  // Memoized target positions
  const targetPosition = useMemo(
    () => ({
      x: SCREEN_WIDTH / 2 - cardDimensions.width + ANIMATION_CONFIG.CARD_OFFSET,
      y: SCREEN_HEIGHT / 2 - cardDimensions.height / 2,
    }),
    [cardDimensions]
  );

  // Animation functions
  const animateToCenter = useCallback(() => {
    const { DURATIONS } = ANIMATION_CONFIG;

    sharedX.value = withTiming(targetPosition.x, {
      duration: DURATIONS.CARD_ANIMATION,
    });
    sharedY.value = withTiming(targetPosition.y, {
      duration: DURATIONS.CARD_ANIMATION,
    });
    backgroundOpacity.value = withTiming(1, {
      duration: DURATIONS.BACKGROUND_FADE,
    });
    rotate.value = withTiming(ANIMATION_CONFIG.ROTATION_ANGLE, {
      duration: DURATIONS.ROTATION,
    });
  }, [sharedX, sharedY, backgroundOpacity, rotate, targetPosition]);

  const animateToOriginal = useCallback(
    (yOffset = 0) => {
      const { DURATIONS } = ANIMATION_CONFIG;

      sharedX.value = withTiming(layout.x);
      sharedY.value = withTiming(layout.y + yOffset);
      backgroundOpacity.value = withTiming(0);
      rotate.value = withTiming(0, { duration: DURATIONS.CARD_ANIMATION });
    },
    [sharedX, sharedY, backgroundOpacity, rotate, layout]
  );

  useEffect(() => {
    animateToCenter();
  }, [animateToCenter]);

  const handleClose = useCallback(() => {
    setShowActions(false);
    animateToOriginal();

    setTimeout(() => {
      onPress();
    }, ANIMATION_CONFIG.DURATIONS.CLOSE_DELAY);
  }, [animateToOriginal, onPress]);

  const handleActionPress = useCallback(
    (action: ActionType) => {
      setShowActions(false);

      if (action === "delete") {
        setIsSelectionEnabled(true);
        animateToOriginal(ANIMATION_CONFIG.CARD_DELETE_OFFSET);
      } else {
        animateToOriginal();
      }

      onActionSelect?.(action);

      setTimeout(() => {
        onPress();
      }, ANIMATION_CONFIG.DURATIONS.CLOSE_DELAY);
    },
    [animateToOriginal, onActionSelect, onPress, setIsSelectionEnabled]
  );

  const cardAnimatedStyle = useAnimatedStyle(
    () => ({
      position: "absolute",
      top: sharedY.value,
      left: sharedX.value,
      borderRadius: 12,
      transform: [{ rotate: `-${rotate.value}deg` }],
    }),
    []
  );

  const backgroundAnimatedStyle = useAnimatedStyle(
    () => ({
      opacity: backgroundOpacity.value,
    }),
    []
  );

  const actionButtons = useMemo(
    () =>
      showActions && (
        <View style={styles.actionsContainer}>
          {ACTIONS.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleActionPress(item.action)}
              activeOpacity={0.8}
            >
              <Animated.View
                entering={SlideInRight.delay(
                  ACTION_CONFIG.ANIMATION_DELAY_MULTIPLIER * index
                )
                  .springify()
                  .damping(ACTION_CONFIG.SPRING_DAMPING.enter)}
                exiting={SlideOutRight.delay(
                  ACTION_CONFIG.ANIMATION_DELAY_MULTIPLIER * index
                )
                  .springify()
                  .damping(ACTION_CONFIG.SPRING_DAMPING.exit)}
                style={styles.actionButton}
              >
                <CustomText variant="h7" fontFamily="FiraCodeBold">
                  {item.title}
                </CustomText>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      ),
    [showActions, handleActionPress]
  );

  const backgroundOverlay = useMemo(
    () => (
      <Animated.View style={[StyleSheet.absoluteFill, backgroundAnimatedStyle]}>
        <BlurView
          intensity={BLUR_CONFIG.INTENSITY}
          style={styles.blurContainer}
        >
          <LinearGradient
            colors={BLUR_CONFIG.GRADIENT_COLORS}
            style={styles.gradient}
          />
        </BlurView>
      </Animated.View>
    ),
    [backgroundAnimatedStyle]
  );

  const memoirCard = useMemo(
    () =>
      selectedMemoirItem && (
        <MemoirCard
          index={0}
          item={selectedMemoirItem}
          onLongPress={() => {}}
          showSelector={false}
        />
      ),
    [selectedMemoirItem]
  );

  return (
    <Pressable onPress={handleClose} style={styles.modalContainer}>
      {actionButtons}
      {backgroundOverlay}
      <Animated.View style={cardAnimatedStyle}>{memoirCard}</Animated.View>
    </Pressable>
  );
};

export default React.memo(MemoirActionModal);

const styles = StyleSheet.create({
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  actionsContainer: {
    alignSelf: "center",
    zIndex: 100,
    marginLeft: "auto",
    marginRight: _horizontalPadding + 10,
    gap: RFValue(20),
  },
  actionButton: {
    backgroundColor: "white",
    borderRadius: RFValue(100),
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  blurContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
