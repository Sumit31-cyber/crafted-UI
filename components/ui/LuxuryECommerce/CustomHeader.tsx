import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  _horizontalPadding,
  _windowWidth,
  FONTS,
  FontSizes,
} from "@/utils/constant";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const CustomHeader = ({
  title,
  isBackButtonVisible = false,
  icon,
  onPress,
}: {
  title: string;
  isBackButtonVisible?: boolean;
  icon: React.ReactNode;
  onPress: () => void;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: _horizontalPadding * 0.7,
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
      <Text style={{ fontFamily: FONTS.TNRBold, fontSize: FontSizes.xLarge }}>
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
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
