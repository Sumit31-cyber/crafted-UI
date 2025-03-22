import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { _windowWidth, LuxuryColors } from "@/utils/constant";
import { BarCodeIcon } from "@/assets/svgs/luxuryECommSvgs/svgs";

const BarCodeView = () => {
  return (
    <View
      style={{
        width: _windowWidth * 0.09,
        aspectRatio: 1,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        borderColor: LuxuryColors.pink,
        borderWidth: StyleSheet.hairlineWidth * 2,
      }}
    >
      <BarCodeIcon size={"50%"} tint={LuxuryColors.brandColor} />
    </View>
  );
};

export default BarCodeView;

const styles = StyleSheet.create({});
