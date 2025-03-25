import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  _windowHeight,
  _windowWidth,
  FONTS,
  FontSizes,
} from "@/utils/constant";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Logo } from "@/assets/svgs/luxuryECommSvgs/svgs";

const _cardHeight = _windowHeight * 0.25;
const _iconSize = 100;
const _chipHeight = 50;
const CreditCard = () => {
  return (
    <View
      style={{
        height: _cardHeight,
        width: "100%",
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: "#242021",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ height: _iconSize, width: _iconSize * 2 }}>
          <View
            style={{
              height: _iconSize,
              aspectRatio: 1,
              backgroundColor: "#e2850c",
              borderRadius: 100,
              position: "absolute",
              right: 20,
            }}
          ></View>
          <View
            style={{
              height: _iconSize,
              aspectRatio: 1,
              backgroundColor: "#d60a12",
              borderRadius: 100,
              position: "absolute",
              left: 20,
              opacity: 0.7,
            }}
          ></View>
        </View>
      </View>
      <BlurView
        intensity={30}
        style={{
          position: "absolute",
          height: _cardHeight / 2,
          width: "100%",
          bottom: 0,
        }}
      />

      <View style={[StyleSheet.absoluteFill, { padding: 10 }]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "white",
              fontFamily: FONTS.poppinsRegular,
              fontSize: FontSizes.large,
            }}
          >
            Credit Card
          </Text>
          <View style={{ marginRight: 5 }}>
            <Logo size={_windowWidth * 0.1} tint="#41393b" />
          </View>
        </View>

        <View
          style={{
            position: "absolute",
            top: _cardHeight / 2 - _chipHeight / 2,
            left: 20,
            right: 10,
          }}
        >
          <Image
            source={require("@/assets/images/chip.png")}
            style={{ height: _chipHeight, width: _chipHeight + 10 }}
          />
          <Text
            style={{
              marginTop: 5,
              fontSize: FontSizes.large,
              fontFamily: FONTS.poppinsMedium,
              color: "white",
              letterSpacing: 0.8,
            }}
          >
            1234{"   "}5678{"   "}9012{"   "}3456
          </Text>
          <Text
            style={{
              fontSize: FontSizes.tiny,
              fontFamily: FONTS.poppinsRegular,
              color: "white",
              opacity: 0.5,
              marginVertical: 2,
            }}
          >
            VALID THRU
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: FontSizes.small,
                fontFamily: FONTS.poppinsRegular,
                color: "white",
                letterSpacing: 0.8,
              }}
            >
              12/25
            </Text>
            <Text
              style={{
                fontSize: FontSizes.small,
                fontFamily: FONTS.poppinsRegular,
                color: "white",
                letterSpacing: 0.8,
              }}
            >
              SUMIT KUMAR
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({});
