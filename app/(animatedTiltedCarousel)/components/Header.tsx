import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { router } from "expo-router";

const Header = () => {
  const { top } = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const _imageHeight = height * 0.05;
  const _imageBorderRadius = 14;
  return (
    <BlurView
      intensity={70}
      tint="dark"
      style={[
        styles.mainContainer,
        {
          paddingTop: top + height * 0.02,
          paddingBottom: height * 0.02,
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1,
        },
      ]}
    >
      <Image
        onTouchStart={() => router.back()}
        transition={300}
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{
          height: _imageHeight,
          borderRadius: _imageBorderRadius,
          aspectRatio: 1,
        }}
      />
      <View
        style={[
          styles.menuContainer,
          {
            height: _imageHeight,
            borderRadius: _imageBorderRadius,
          },
        ]}
      >
        <View style={[styles.barStyle]} />
        <View style={[styles.barStyle, { width: "70%" }]} />
        <View style={[styles.barStyle]} />
      </View>
    </BlurView>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "#0b1118",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  barStyle: {
    height: 2.5,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 100,
  },
  menuContainer: {
    aspectRatio: 1,
    backgroundColor: "#46474d",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
