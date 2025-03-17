import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const CustomBackdrop = React.memo(
  ({ onBackdropPress }: { onBackdropPress: () => void }) => {
    return (
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={[
          StyleSheet.absoluteFill,

          {
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        ]}
      >
        <Pressable onPress={onBackdropPress} style={{ flex: 1 }} />
      </Animated.View>
    );
  }
);

export default CustomBackdrop;

const styles = StyleSheet.create({});
