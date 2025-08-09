import {
  findNodeHandle,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Ellipsis } from "lucide-react-native";
import { ImageBackground } from "expo-image";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";

import CustomText from "@/components/CustomText";
import SelectorView from "./SelectorView";
import { useSharedState } from "@/context/SharedContext";
import { getCardHeight, getCardWidth } from "@/utils/functions";
import { MemoirItem } from "@/constants/types";

const ANIMATION_CONFIG = {
  ROTATION_ANGLE: 2,
  DURATIONS: {
    ROTATION_SEQUENCE: [80, 120, 80] as const,
    STOP_ROTATION: 300,
  },
} as const;

// Style constants
const STYLE_CONFIG = {
  BORDER_RADIUS: RFValue(14),
  MARGIN: RFValue(10),
  SHADOW: {
    COLOR: "#000",
    OFFSET: { width: 0, height: 2 },
    OPACITY: 0.25,
    RADIUS: 3.84,
    ELEVATION: 5,
  },
} as const;

interface MemoirCardProps {
  item: MemoirItem;
  index: number;
  onLongPress: (event: GestureResponderEvent, item: MemoirItem) => void;
  showSelector?: boolean;
}

const MemoirCard: React.FC<MemoirCardProps> = ({
  item,
  index,
  onLongPress,
  showSelector = true,
}) => {
  const viewRef = useRef<View>(null);
  const rotate = useSharedValue(0);

  const { isSelectionEnabled, toggleMemoirSelection } = useSharedState();

  const cardDimensions = useMemo(
    () => ({
      width: getCardWidth(),
      height: getCardHeight(),
    }),
    []
  );

  const rotationMultiplier = useMemo(() => (index % 2 === 0 ? 1 : -1), [index]);

  const startWiggleAnimation = useCallback(() => {
    const { ROTATION_ANGLE, DURATIONS } = ANIMATION_CONFIG;
    rotate.value = withRepeat(
      withSequence(
        withTiming(-ROTATION_ANGLE * rotationMultiplier, {
          duration: DURATIONS.ROTATION_SEQUENCE[0],
        }),
        withTiming(ROTATION_ANGLE * rotationMultiplier, {
          duration: DURATIONS.ROTATION_SEQUENCE[1],
        }),
        withTiming(0, {
          duration: DURATIONS.ROTATION_SEQUENCE[2],
        })
      ),
      -1,
      true
    );
  }, [rotate, rotationMultiplier]);

  const stopWiggleAnimation = useCallback(() => {
    rotate.value = withTiming(0, {
      duration: ANIMATION_CONFIG.DURATIONS.STOP_ROTATION,
    });
  }, [rotate]);

  useEffect(() => {
    if (isSelectionEnabled) {
      startWiggleAnimation();
    } else {
      stopWiggleAnimation();
    }
  }, [isSelectionEnabled, startWiggleAnimation, stopWiggleAnimation]);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ rotate: `${rotate.value}deg` }],
    }),
    []
  );

  const cardContainerStyle = useMemo(
    () => [
      styles.memoirContainer,
      animatedStyle,
      {
        width: cardDimensions.width,
        height: cardDimensions.height,
        borderRadius: STYLE_CONFIG.BORDER_RADIUS,
      },
    ],
    [animatedStyle, cardDimensions]
  );

  const imageBackgroundStyle = useMemo(
    () => [
      styles.imageSection,
      {
        height: cardDimensions.height * 0.75,
        width: cardDimensions.width - STYLE_CONFIG.MARGIN,
        borderRadius: STYLE_CONFIG.BORDER_RADIUS,
        marginTop: STYLE_CONFIG.MARGIN / 2,
        ...STYLE_CONFIG.SHADOW,
      },
    ],
    [cardDimensions]
  );

  const informationContainerStyle = useMemo(
    () => [styles.informationContainer, { margin: STYLE_CONFIG.MARGIN }],
    []
  );

  const handleLongPress = useCallback(
    (event: GestureResponderEvent) => {
      onLongPress(event, item);
    },
    [onLongPress, item]
  );

  const handleSelect = useCallback(() => {
    const node = findNodeHandle(viewRef.current);
    if (!node) return;

    UIManager.measure(node, (x, y, width, height, pageX, pageY) => {
      console.log({ x, y, width, height, pageX, pageY });
      toggleMemoirSelection({
        pageX,
        pageY,
        height,
        width,
        ...item,
      });
    });
  }, [toggleMemoirSelection, item]);

  const cardContent = useMemo(
    () => (
      <>
        <ImageBackground source={item.thumbnail} style={imageBackgroundStyle} />
        <View style={informationContainerStyle}>
          <View>
            <CustomText variant="h6" fontFamily="poppinsMedium">
              {item.title}
            </CustomText>
            <CustomText variant="h7" style={styles.imageCountText}>
              {item.imageCount} Images
            </CustomText>
          </View>
          <Ellipsis color="black" size={RFValue(14)} />
        </View>
      </>
    ),
    [
      item.thumbnail,
      item.title,
      item.imageCount,
      imageBackgroundStyle,
      informationContainerStyle,
    ]
  );

  return (
    <TouchableOpacity
      onLongPress={handleLongPress}
      disabled={isSelectionEnabled}
      activeOpacity={0.8}
    >
      <Animated.View ref={viewRef} style={cardContainerStyle}>
        {cardContent}
      </Animated.View>
      {showSelector && <SelectorView id={item.id} onSelect={handleSelect} />}
    </TouchableOpacity>
  );
};

export default React.memo(MemoirCard);

const styles = StyleSheet.create({
  memoirContainer: {
    backgroundColor: "#ffffff",
    borderColor: "white",
    borderWidth: 1,
  },
  imageSection: {
    backgroundColor: "#ececec",
    borderWidth: 5,
    borderColor: "white",
    alignSelf: "center",
    overflow: "hidden",
  },
  informationContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
  },
  imageCountText: {
    opacity: 0.4,
  },
});
