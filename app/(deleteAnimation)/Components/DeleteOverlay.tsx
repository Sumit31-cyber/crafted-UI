import React, { useEffect, useMemo } from "react";
import { StyleSheet, TouchableOpacity, Dimensions, View } from "react-native";
import { Trash2, X } from "lucide-react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  FadeIn,
  FadeOut,
  useSharedValue,
  Easing,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";

import CustomText from "@/components/CustomText";
import MemoirCard from "./MemoirCard";
import { useSharedState } from "@/context/SharedContext";
import { getCardHeight, getCardWidth } from "@/utils/functions";
import {
  _horizontalPadding,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/utils/constant";
import { GAP } from "./AllMemoirs";
import { MemoirViewOffset } from "@/constants/types";

const ANIMATION_CONFIG = {
  PILL_TRANSFORM_DURATION: 450,
  FADE_IN_DURATION: 300,
  FADE_OUT_DURATION: 0,
  CARD_TRANSITION_DURATION: 500,
  SPRING_CONFIG: { damping: 15, stiffness: 150 },
} as const;

const LAYOUT_CONFIG = {
  PILL_HEIGHT: 60,
  PILL_WIDTH_COLLAPSED: SCREEN_WIDTH * 0.42,
  MODAL_HEIGHT: SCREEN_HEIGHT * 0.5,
  MODAL_WIDTH: SCREEN_WIDTH * 0.95,
  PILL_BORDER_RADIUS: 30,
  MODAL_BORDER_RADIUS: 25,
  BUTTON_GAP: 12,
  BUTTON_PADDING: 8,
} as const;

const CARD_STACK_CONFIG = {
  OFFSET_X: 20,
  OFFSET_Y: 12,
  MAX_ROTATION: 4,
  SCALE_FACTOR: 0.6,
  POSITION_Y_OFFSET: SCREEN_HEIGHT * 0.53,
} as const;

interface DeleteOverlayProps {}

const DeleteOverlay: React.FC<DeleteOverlayProps> = () => {
  const {
    isSelectionEnabled,
    setIsSelectionEnabled,
    deleteMemoir,
    setDeleteMemoir,
    selectedMemoir,
    setSelectedMemoir,
  } = useSharedState();

  const isVisible = isSelectionEnabled || deleteMemoir;

  // Animated values with proper initialization
  const containerOpacity = useSharedValue(0);
  const containerScale = useSharedValue(0.95);
  const backgroundOpacity = useSharedValue(0);

  // Update animation values when visibility changes
  useEffect(() => {
    const springConfig = {
      damping: 18,
      stiffness: 200,
      mass: 0.8,
    };

    containerOpacity.value = withSpring(isVisible ? 1 : 0, springConfig);
    containerScale.value = withSpring(isVisible ? 1 : 0.95, springConfig);
    backgroundOpacity.value = withTiming(deleteMemoir ? 0.5 : 0, {
      duration: ANIMATION_CONFIG.FADE_IN_DURATION,
    });
  }, [isVisible, deleteMemoir]);

  // Memoized animated styles
  const containerAnimatedStyle = useAnimatedStyle(
    () => ({
      opacity: containerOpacity.value,
      transform: [{ scale: containerScale.value }],
      backgroundColor: `rgba(0,0,0,${backgroundOpacity.value})`,
    }),
    []
  );

  const pillAnimatedStyle = useAnimatedStyle(() => {
    const height = withTiming(
      deleteMemoir ? LAYOUT_CONFIG.MODAL_HEIGHT : LAYOUT_CONFIG.PILL_HEIGHT,
      {
        duration: ANIMATION_CONFIG.PILL_TRANSFORM_DURATION,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }
    );

    const width = withTiming(
      deleteMemoir
        ? LAYOUT_CONFIG.MODAL_WIDTH
        : LAYOUT_CONFIG.PILL_WIDTH_COLLAPSED,
      {
        duration: ANIMATION_CONFIG.PILL_TRANSFORM_DURATION,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }
    );

    const borderRadius = withTiming(
      deleteMemoir
        ? LAYOUT_CONFIG.MODAL_BORDER_RADIUS
        : LAYOUT_CONFIG.PILL_BORDER_RADIUS,
      {
        duration: ANIMATION_CONFIG.PILL_TRANSFORM_DURATION,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }
    );

    return { height, width, borderRadius };
  }, [deleteMemoir]);

  const handleDeletePress = () => {
    setDeleteMemoir(true);
    setIsSelectionEnabled(false);
  };

  const handleCancelPress = () => {
    if (deleteMemoir) {
      setIsSelectionEnabled(true);
      setDeleteMemoir(false);
    } else {
      setDeleteMemoir(false);
      setIsSelectionEnabled(false);
      setSelectedMemoir(null);
    }
  };

  const renderTransitionCards = useMemo(() => {
    if (!selectedMemoir) return null;

    return selectedMemoir.map((item, index) => (
      <TransitionMemoirCard
        key={`memoir-${index}-${item.pageX}-${item.pageY}`}
        item={item}
        index={index}
        totalCards={selectedMemoir.length}
      />
    ));
  }, [selectedMemoir]);

  if (!isVisible) return null;

  return (
    <Animated.View
      pointerEvents={deleteMemoir ? "auto" : "box-none"}
      style={[styles.container, containerAnimatedStyle]}
    >
      {renderTransitionCards}

      <Animated.View style={[styles.pillContainer, pillAnimatedStyle]}>
        <PillContent
          deleteMemoir={deleteMemoir}
          onDeletePress={handleDeletePress}
          onCancelPress={handleCancelPress}
        />

        {deleteMemoir && <ModalContent selectedMemoir={selectedMemoir} />}
      </Animated.View>
    </Animated.View>
  );
};

interface PillContentProps {
  deleteMemoir: boolean;
  onDeletePress: () => void;
  onCancelPress: () => void;
}

const PillContent: React.FC<PillContentProps> = ({
  deleteMemoir,
  onDeletePress,
  onCancelPress,
}) => {
  const deleteButtonWidth = useSharedValue(100);
  const cancelButtonWidth = useSharedValue(40);
  const cancelTextOpacity = useSharedValue(0);

  useEffect(() => {
    const duration = ANIMATION_CONFIG.PILL_TRANSFORM_DURATION;
    const easing = Easing.bezier(0.4, 0, 0.2, 1);

    deleteButtonWidth.value = withTiming(deleteMemoir ? 150 : 100, {
      duration,
      easing,
    });

    cancelButtonWidth.value = withTiming(deleteMemoir ? 150 : 40, {
      duration,
      easing,
    });

    cancelTextOpacity.value = withTiming(deleteMemoir ? 1 : 0, {
      duration: deleteMemoir
        ? ANIMATION_CONFIG.FADE_IN_DURATION
        : ANIMATION_CONFIG.FADE_OUT_DURATION,
      easing,
    });
  }, [deleteMemoir]);

  const deleteButtonStyle = useAnimatedStyle(
    () => ({
      width: deleteButtonWidth.value,
    }),
    []
  );

  const cancelButtonStyle = useAnimatedStyle(
    () => ({
      width: cancelButtonWidth.value,
    }),
    []
  );

  const cancelTextStyle = useAnimatedStyle(
    () => ({
      opacity: cancelTextOpacity.value,
      position: "absolute" as const,
      alignSelf: "center" as const,
    }),
    []
  );

  return (
    <Animated.View style={styles.pillContent}>
      <Animated.View style={deleteButtonStyle}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onDeletePress}
          style={styles.deleteButton}
        >
          <Trash2 color="white" size={16} />
          <CustomText variant="h7" fontFamily="poppinsMedium" color="white">
            Delete
          </CustomText>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[cancelButtonStyle, styles.closeButton]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.fullTouchable}
          onPress={onCancelPress}
        >
          <Animated.View style={cancelTextStyle}>
            <CustomText variant="h7" fontFamily="poppinsMedium" color="white">
              Cancel
            </CustomText>
          </Animated.View>

          {!deleteMemoir && (
            <Animated.View entering={FadeIn.duration(200)}>
              <X color="white" size={16} />
            </Animated.View>
          )}
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

interface ModalContentProps {
  selectedMemoir: MemoirViewOffset[] | null;
}

const ModalContent: React.FC<ModalContentProps> = ({ selectedMemoir }) => (
  <Animated.View
    entering={FadeIn.delay(150).duration(ANIMATION_CONFIG.FADE_IN_DURATION)}
    exiting={FadeOut.duration(ANIMATION_CONFIG.FADE_OUT_DURATION)}
    style={styles.modalContent}
  >
    <View style={styles.modalHeader}>
      <View style={styles.modalHandle} />
      <CustomText variant="h5" fontFamily="FiraCodeMedium">
        Delete Memoir?
      </CustomText>
    </View>

    <View style={styles.modalBody} />

    <Animated.View entering={FadeIn.delay(250)}>
      <CustomText
        variant="h6"
        fontFamily="FiraCodeMedium"
        style={styles.confirmationText}
      >
        Are you sure you want to{" "}
        <CustomText variant="h5" fontFamily="FiraCodeBold">
          delete {selectedMemoir?.length} Memoirs
        </CustomText>{" "}
        from the list?
      </CustomText>
    </Animated.View>
  </Animated.View>
);

interface TransitionMemoirCardProps {
  item: MemoirViewOffset;
  index: number;
  totalCards: number;
}

const TransitionMemoirCard: React.FC<TransitionMemoirCardProps> = ({
  item,
  index,
  totalCards,
}) => {
  const { deleteMemoir } = useSharedState();

  const CARD_HEIGHT = getCardHeight();
  const CARD_WIDTH = getCardWidth();

  const initialPosX = item.pageX + _horizontalPadding * 2 - 20;
  const initialPosY = item.pageY - _horizontalPadding * 2 + 20 + GAP / 2;

  // Shared values
  const translateX = useSharedValue(initialPosX);
  const translateY = useSharedValue(initialPosY);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(1);

  // Calculate final positions for stacked effect
  const stackIndex = totalCards - index - 1;
  const centerX = SCREEN_WIDTH / 2 - CARD_WIDTH / 2;
  const finalX = centerX + stackIndex * CARD_STACK_CONFIG.OFFSET_X;
  const finalY = CARD_STACK_CONFIG.POSITION_Y_OFFSET;
  const finalScale = CARD_STACK_CONFIG.SCALE_FACTOR;

  const rotationAmount = useMemo(() => {
    const rotationSign = index % 2 === 0 ? 1 : -1;
    return (
      (Math.random() * 3 + 1) * rotationSign * CARD_STACK_CONFIG.MAX_ROTATION
    );
  }, [index]);

  const animationConfig = useMemo(
    () => ({
      duration: ANIMATION_CONFIG.CARD_TRANSITION_DURATION,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }),
    []
  );

  useEffect(() => {
    if (deleteMemoir) {
      // Animate to stacked position
      translateX.value = withTiming(finalX, animationConfig);
      translateY.value = withTiming(finalY, animationConfig);
      scale.value = withTiming(finalScale, animationConfig);
      rotate.value = withTiming(rotationAmount, {
        ...animationConfig,
        duration: animationConfig.duration + 100,
      });
      opacity.value = withTiming(1, {
        duration: ANIMATION_CONFIG.FADE_IN_DURATION,
      });
    } else {
      // Animate back to original position
      translateX.value = withTiming(initialPosX, animationConfig);
      translateY.value = withTiming(initialPosY, animationConfig);
      scale.value = withTiming(1, animationConfig);
      rotate.value = withTiming(0, animationConfig);
      opacity.value = withDelay(300, withTiming(0, { duration: 200 }));
    }
  }, [deleteMemoir]);

  const cardAnimatedStyle = useAnimatedStyle(
    () => ({
      position: "absolute" as const,
      top: translateY.value,
      left: translateX.value,
      opacity: opacity.value,
      transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
      zIndex: 10000 + (totalCards - index),
    }),
    []
  );

  return (
    <Animated.View style={[cardAnimatedStyle, styles.transitionCard]}>
      <MemoirCard
        index={index}
        item={item as any}
        onLongPress={() => console.log("Card pressed:", index)}
        showSelector={false}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    paddingBottom: 30,
    zIndex: 1000,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  pillContainer: {
    backgroundColor: "#fefefe",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    overflow: "hidden",
  },
  pillContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: LAYOUT_CONFIG.PILL_HEIGHT,
    paddingHorizontal: LAYOUT_CONFIG.BUTTON_PADDING,
    gap: LAYOUT_CONFIG.BUTTON_GAP,
    marginTop: "auto",
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff4757",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 6,
  },
  closeButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6c757d",
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  fullTouchable: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: RFValue(50),
    alignItems: "center",
    paddingHorizontal: RFValue(20),
  },
  modalHeader: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: _horizontalPadding,
    gap: _horizontalPadding,
  },
  modalHandle: {
    height: RFValue(6),
    width: RFValue(60),
    backgroundColor: "#f4f4f4",
    borderRadius: 100,
  },
  modalBody: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  confirmationText: {
    textAlign: "center",
    marginBottom: RFValue(10),
  },
  transitionCard: {
    shadowColor: "rgba(99, 99, 99, 0.8)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default DeleteOverlay;
