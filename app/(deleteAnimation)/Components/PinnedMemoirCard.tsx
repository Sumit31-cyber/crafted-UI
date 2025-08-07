import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useSharedState } from "@/context/SharedContext";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { GAP } from "./AllMemoirs";
import SelectorView from "./SelectorView";

const PinnedMemoirCard = ({
  item,
  index,
}: {
  item: { id: number };
  index: number;
}) => {
  const { isSelectionEnabled, setIsSelectionEnabled } = useSharedState();
  const rotate = useSharedValue(0);
  const selectorSize = useSharedValue(0);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (isSelectionEnabled) {
      const rotationMultiplier = index % 2 === 0 ? 1 : -1;
      rotate.value = withRepeat(
        withSequence(
          withTiming(-2 * rotationMultiplier, { duration: 80 }),
          withTiming(2 * rotationMultiplier, { duration: 120 }),
          withTiming(0, { duration: 80 })
        ),
        -1,
        true
      );
      selectorSize.value = withTiming(20, { duration: 300 });
    } else {
      rotate.value = withTiming(0, { duration: 300 });
      selectorSize.value = withTiming(0, { duration: 300 });
    }
  }, [isSelectionEnabled, index]);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  return (
    <View>
      <Animated.View
        key={item.id}
        style={[
          rStyle,
          {
            height: RFValue(80),
            width: RFValue(120),
            backgroundColor: "#e2e2e2",
            borderRadius: RFValue(14),
            borderColor: "white",
            borderWidth: 1,
          },
        ]}
      ></Animated.View>
      <SelectorView selected={selected} setSelected={setSelected} />
    </View>
  );
};

export default PinnedMemoirCard;

const styles = StyleSheet.create({});
