import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { FONTS } from "@/utils/constant";

type props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
const BigButton = ({ title, onPress, style }: props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          width: "90%",
          backgroundColor: "black",
          marginTop: "auto",
          borderRadius: 100,
          alignSelf: "center",
        },
        style,
      ]}
    >
      <Text style={{ fontFamily: FONTS.poppinsRegular, color: "white" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BigButton;

const styles = StyleSheet.create({});
