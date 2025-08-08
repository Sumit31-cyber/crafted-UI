import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo } from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSharedState } from "@/context/SharedContext";
import { GAP } from "./AllMemoirs";
import { Check } from "lucide-react-native";
import { RFValue } from "react-native-responsive-fontsize";

const SelectorView = ({
  id,
  onSelect,
}: {
  id: number;
  onSelect?: () => void;
}) => {
  const { isSelectionEnabled, selectedMemoir } = useSharedState();
  const selected = useMemo(() => {
    return selectedMemoir?.find((item) => item.id === id);
  }, [selectedMemoir]);

  const rSelectorStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(isSelectionEnabled ? 20 : 0, { duration: 400 }),
      width: withTiming(isSelectionEnabled ? 20 : 0, { duration: 400 }),
      opacity: withTiming(isSelectionEnabled ? 1 : 0, { duration: 400 }),
      marginTop: withTiming(isSelectionEnabled ? GAP : 0, { duration: 400 }),
    };
  });

  return (
    <TouchableOpacity onPress={onSelect}>
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
