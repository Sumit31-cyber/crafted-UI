import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { RFValue } from "react-native-responsive-fontsize";
import { _horizontalPadding } from "@/utils/constant";
import CustomText from "@/components/CustomText";

const IMAGE_URL =
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D";
const IMAGE_SIZE = RFValue(40);

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CustomText variant="h1" fontFamily="FiraCodeBold">
        Memoir
      </CustomText>
      <Image
        style={{
          height: IMAGE_SIZE,
          aspectRatio: 1,
          borderRadius: IMAGE_SIZE / 2,
        }}
        source={{ uri: IMAGE_URL }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
