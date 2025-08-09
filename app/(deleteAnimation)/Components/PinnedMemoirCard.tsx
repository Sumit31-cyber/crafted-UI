import { StyleSheet, View } from "react-native";
import React, { useCallback, useEffect, useMemo } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useSharedState } from "@/context/SharedContext";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import SelectorView from "./SelectorView";
import CustomText from "@/components/CustomText";
import { MemoirItem } from "@/constants/types";
import { Image } from "expo-image";
import { _horizontalPadding } from "@/utils/constant";

const ANIMATION_CONFIG = {
  ROTATION_ANGLE: 2,
  ROTATION_DURATION: { initial: 80, middle: 120, final: 80 },
  SELECTOR_SIZE: 20,
  TRANSITION_DURATION: 300,
} as const;

interface PinnedMemoirCardProps {
  item: MemoirItem;
  index: number;
}

const PinnedMemoirCard: React.FC<PinnedMemoirCardProps> = ({ item, index }) => {
  const { isSelectionEnabled } = useSharedState();
  const rotate = useSharedValue(0);
  const selectorSize = useSharedValue(0);

  const rotationMultiplier = useMemo(() => (index % 2 === 0 ? 1 : -1), [index]);

  const startWiggleAnimation = useCallback(() => {
    rotate.value = withRepeat(
      withSequence(
        withTiming(-ANIMATION_CONFIG.ROTATION_ANGLE * rotationMultiplier, {
          duration: ANIMATION_CONFIG.ROTATION_DURATION.initial,
        }),
        withTiming(ANIMATION_CONFIG.ROTATION_ANGLE * rotationMultiplier, {
          duration: ANIMATION_CONFIG.ROTATION_DURATION.middle,
        }),
        withTiming(0, { duration: ANIMATION_CONFIG.ROTATION_DURATION.final })
      ),
      -1,
      true
    );
    selectorSize.value = withTiming(ANIMATION_CONFIG.SELECTOR_SIZE, {
      duration: ANIMATION_CONFIG.TRANSITION_DURATION,
    });
  }, [rotate, selectorSize, rotationMultiplier]);

  const stopWiggleAnimation = useCallback(() => {
    rotate.value = withTiming(0, {
      duration: ANIMATION_CONFIG.TRANSITION_DURATION,
    });
    selectorSize.value = withTiming(0, {
      duration: ANIMATION_CONFIG.TRANSITION_DURATION,
    });
  }, [rotate, selectorSize]);

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

  const cardContent = useMemo(
    () => (
      <>
        <View style={styles.textContainer}>
          <CustomText variant="h7">{item.title}</CustomText>
          <CustomText variant="h8" style={styles.imageCountText}>
            {item.imageCount} Images
          </CustomText>
        </View>
        <Image
          contentFit="cover"
          source={require("@/assets/images/pinnedMemoir.png")}
          style={styles.image}
        />
      </>
    ),
    [item.title, item.imageCount]
  );

  return (
    <View>
      <Animated.View key={item.id} style={[styles.card, animatedStyle]}>
        {cardContent}
      </Animated.View>
      <SelectorView id={item.id} onSelect={() => {}} />
    </View>
  );
};

export default React.memo(PinnedMemoirCard);

const styles = StyleSheet.create({
  card: {
    height: RFValue(70),
    width: RFValue(120),
    backgroundColor: "#e2e2e2",
    borderRadius: RFValue(14),
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
    paddingTop: _horizontalPadding,
    justifyContent: "space-between",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageCountText: {
    opacity: 0.5,
  },
  image: {
    height: "50%",
    width: "70%",
  },
});
