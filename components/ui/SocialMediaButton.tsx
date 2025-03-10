import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { FONTS, FontSizes } from "@/utils/constant";

export enum ButtonTypes {
  Google = "google",
  Facebook = "facebook",
}

type Props = {
  buttonType: ButtonTypes;
  onPress: () => void;
};

const SocialMediaButton: React.FC<Props> = ({ buttonType, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        height: 55,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        borderRadius: 50,
      }}
    >
      {buttonType === ButtonTypes.Google ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={require("../../assets/images/google.png")}
            style={{ height: 30, aspectRatio: 1 }}
          />
          <Text
            style={{
              fontFamily: FONTS.poppinsRegular,
              letterSpacing: 0.8,
              fontSize: FontSizes.tiny,
            }}
          >
            Continue with google {"   "}
          </Text>
        </View>
      ) : buttonType === ButtonTypes.Facebook ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={require("../../assets/images/facebook.png")}
            style={{ height: 30, aspectRatio: 1 }}
          />
          <Text
            style={{
              fontFamily: FONTS.poppinsRegular,
              letterSpacing: 0.8,
              fontSize: FontSizes.tiny,
            }}
          >
            Continue with facebook
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default SocialMediaButton;

const styles = StyleSheet.create({});
