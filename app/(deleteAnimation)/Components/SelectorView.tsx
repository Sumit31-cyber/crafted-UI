import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSharedState } from "@/context/SharedContext";
import { GAP } from "./AllMemoirs";
import { Check } from "lucide-react-native";
import { RFValue } from "react-native-responsive-fontsize";

const SelectorView = ({
  selected,
  setSelected,
}: {
  selected: boolean;
  setSelected: (prev: boolean) => void;
}) => {
  const { deleteMemoirs } = useSharedState();

  const rSelectorStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(deleteMemoirs ? 20 : 0, { duration: 400 }),
      width: withTiming(deleteMemoirs ? 20 : 0, { duration: 400 }),
      opacity: withTiming(deleteMemoirs ? 1 : 0, { duration: 400 }),
      marginTop: withTiming(deleteMemoirs ? GAP : 0, { duration: 400 }),
    };
  });

  return (
    <TouchableOpacity onPress={() => setSelected(!selected)}>
      <Animated.View
        style={[
          rSelectorStyle,
          {
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
            borderWidth: 2,
            borderColor: selected ? `#4a6dd4` : "#9b9b9b",
            alignSelf: "center",
            backgroundColor: selected ? `#4a6dd4` : "transparent",
          },
        ]}
      >
        {selected && <Check color={"white"} size={RFValue(10)} />}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default SelectorView;

const styles = StyleSheet.create({});
