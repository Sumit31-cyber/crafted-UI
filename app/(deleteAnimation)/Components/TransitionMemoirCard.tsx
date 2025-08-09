import React, { useEffect, useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  Easing,
  withDelay,
} from "react-native-reanimated";
import MemoirCard from "./MemoirCard";
import { useSharedState } from "@/context/SharedContext";
import { getCardWidth, getMemoirCardGap } from "@/utils/functions";
import {
  _horizontalPadding,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/utils/constant";

import { TransitionMemoirCardProps } from "@/constants/types";
import { ANIMATION_CONFIG } from "./DeleteOverlay";

const CARD_STACK_CONFIG = {
  OFFSET_X: 20,
  OFFSET_Y: 12,
  MAX_ROTATION: 4,
  SCALE_FACTOR: 0.6,
  POSITION_Y_OFFSET: SCREEN_HEIGHT * 0.53,
} as const;

const TransitionMemoirCard: React.FC<TransitionMemoirCardProps> = ({
  item,
  index,
  totalCards,
}) => {
  const { deleteMemoir } = useSharedState();

  const CARD_WIDTH = getCardWidth();

  const initialPosX = item.pageX + _horizontalPadding * 2 - 20;
  const initialPosY =
    item.pageY - _horizontalPadding * 2 + 20 + getMemoirCardGap() / 2;

  const translateX = useSharedValue(initialPosX);
  const translateY = useSharedValue(initialPosY);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(1);

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
  transitionCard: {
    shadowColor: "rgba(99, 99, 99, 0.8)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default TransitionMemoirCard;
