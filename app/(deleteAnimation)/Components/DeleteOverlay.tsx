import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Trash2, X } from "lucide-react-native";
import CustomText from "@/components/CustomText";
import { _horizontalPadding } from "@/utils/constant";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSharedState } from "@/context/SharedContext";

const DeleteOverlay = () => {
  const { isSelectionEnabled, setIsSelectionEnabled } = useSharedState();

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withTiming(isSelectionEnabled ? 1 : 0, { duration: 400 }) },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        rStyle,
        {
          position: "absolute",
          backgroundColor: "white",
          zIndex: 1,
          bottom: RFValue(30),
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          padding: RFValue(8),
          borderRadius: 100,
          gap: RFValue(8),
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ff4140",
          gap: 5,
          padding: RFValue(8),
          borderRadius: 100,
        }}
      >
        <Trash2 color={"white"} size={RFValue(14)} />
        <CustomText variant="h7" fontFamily="poppinsMedium" color="white">
          Delete
        </CustomText>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setIsSelectionEnabled(false)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6e6e6e",
          padding: RFValue(8),
          borderRadius: 100,
        }}
      >
        <X color={"white"} size={RFValue(14)} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default DeleteOverlay;

const styles = StyleSheet.create({});
