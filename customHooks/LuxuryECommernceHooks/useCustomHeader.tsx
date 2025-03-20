import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import {
  _headerHeight,
  _horizontalPadding,
  _windowWidth,
  FONTS,
  FontSizes,
} from "@/utils/constant";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useCustomHeader = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const { top } = useSafeAreaInsets();
  const Header = ({
    title,
    isBackButtonVisible = false,
    icon,
    onPress,
    children,
  }: {
    title: string;
    isBackButtonVisible?: boolean;
    icon: React.ReactNode;
    onPress: () => void;
    children?: React.ReactNode;
  }) => {
    return (
      <BlurView
        intensity={100}
        style={{
          position: "absolute",
          paddingTop: top,
          left: 0,
          right: 0,
          paddingHorizontal: _horizontalPadding,
          zIndex: 999,
        }}
        onLayout={(e) => {
          setHeaderHeight(e.nativeEvent.layout.height);
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: _horizontalPadding * 0.7,
            height: _headerHeight,
          }}
        >
          {isBackButtonVisible && (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => router.back()}
              style={{
                height: _windowWidth * 0.09,
                aspectRatio: 1,
                borderRadius: 100,
                borderWidth: StyleSheet.hairlineWidth * 2,
                borderColor: "black",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="arrowleft" size={18} color="black" />
            </TouchableOpacity>
          )}
          <Text
            style={{ fontFamily: FONTS.TNRBold, fontSize: FontSizes.xLarge }}
          >
            {title}
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={{
              height: _windowWidth * 0.09,
              aspectRatio: 1,
              borderRadius: 100,
              borderWidth: StyleSheet.hairlineWidth * 2,
              borderColor: "black",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </TouchableOpacity>
        </View>
        {children}
      </BlurView>
    );
  };

  return { Header, headerHeight };
};

export default useCustomHeader;

const styles = StyleSheet.create({});
