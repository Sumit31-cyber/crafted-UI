import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { _windowWidth, LuxuryColors } from "@/utils/constant";
import { BlurView } from "expo-blur";

const BlurBackdrop = ({ style }: { style?: ViewStyle }) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: "rgba(256,256,256,0.3)", ...style },
      ]}
    >
      <View
        style={[
          styles.containerStyle,
          {
            height: _windowWidth * 0.6,
            right: -100,
          },
        ]}
      ></View>
      <View
        style={[
          styles.containerStyle,
          {
            height: _windowWidth * 0.5,
            left: -100,
            top: 300,
          },
        ]}
      ></View>

      <View
        style={[
          styles.containerStyle,
          {
            height: _windowWidth * 0.8,
            right: -100,
            bottom: 0,
          },
        ]}
      ></View>
      <BlurView style={[StyleSheet.absoluteFill]} intensity={100} />
    </View>
  );
};

export default BlurBackdrop;

const styles = StyleSheet.create({
  containerStyle: {
    aspectRatio: 1,
    backgroundColor: "#f6edee",
    borderRadius: 1000,
    position: "absolute",
    // opacity: 0.35,
  },
});
