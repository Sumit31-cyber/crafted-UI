import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Marquee } from "@animatereactnative/marquee";
import {
  _windowHeight,
  _windowWidth,
  FONTS,
  FontSizes,
} from "@/utils/constant";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BigButton from "@/components/ui/BigButton";

const _firstRowImages = [
  "https://images.pexels.com/photos/20451006/pexels-photo-20451006/free-photo-of-a-lady-was-walking-on-the-beach-in-the-evening.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/30908626/pexels-photo-30908626/free-photo-of-fashionable-woman-in-urban-streetwear.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/30968008/pexels-photo-30968008/free-photo-of-fashionable-woman-in-urban-setting-with-stylish-attire.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/30979867/pexels-photo-30979867/free-photo-of-stylish-woman-in-black-blazer-and-white-top.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/30956388/pexels-photo-30956388/free-photo-of-woman-walking-in-colorful-sweater-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1200",
];
const _secondRowImages = [
  "https://images.pexels.com/photos/31005730/pexels-photo-31005730/free-photo-of-stylish-woman-in-black-blazer-and-lace-top.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/30958423/pexels-photo-30958423/free-photo-of-stylish-woman-holding-handbag-in-red-dress.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/30953556/pexels-photo-30953556/free-photo-of-elegant-woman-in-red-dress-at-hat-stall-in-villa-de-leyva.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1200",
];
const _rotationDegree = _windowWidth * 0.03;
const _sliderGap = _windowWidth * 0.04;
const _imageHeight = _windowHeight * 0.4;
const _marqueeHeight = _windowHeight * 0.8;

const LandingScreen = () => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />

      <View
        style={{
          height: _marqueeHeight,
          flexDirection: "row",
          gap: _sliderGap,
          transform: [
            { rotate: `-${_rotationDegree}deg` },
            { translateY: -_windowWidth * 0.1 },
          ],
        }}
      >
        <Marquee
          style={{
            height: "80%",
            width: _windowWidth * 0.6,
            overflow: "hidden",
            borderRadius: _sliderGap,
          }}
          speed={0.4}
          direction="vertical"
        >
          {_firstRowImages.map((item, index) => {
            return (
              <RenderImage key={`Image-${index}`} item={item} index={index} />
            );
          })}
        </Marquee>

        <Marquee
          style={{
            height: "100%",
            width: _windowWidth * 0.6,
            overflow: "hidden",
            borderRadius: _sliderGap,
          }}
          speed={0.4}
          direction="vertical"
          reverse
        >
          {_secondRowImages.map((item, index) => {
            return (
              <RenderImage key={`Image-${index}`} item={item} index={index} />
            );
          })}
        </Marquee>
      </View>

      <LinearGradient
        start={{ x: 0.5, y: 0.5 }}
        colors={["#febcbd", "#fff1f1"]}
        style={[StyleSheet.absoluteFill, { opacity: 0.5 }]}
      />

      <View
        style={{
          position: "absolute",
          width: "100%",
          // backgroundColor: "rgba(1,1,1,0.2)",
          bottom: 0,
          left: 0,
          right: 0,
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.TNR,
            fontSize: FontSizes.xLarge,
            width: "70%",
            textAlign: "center",
            lineHeight: _windowWidth * 0.08,
            color: "#292420",
          }}
        >
          Luxury is not just a Choice; it's a statement.
        </Text>

        <Text
          style={{
            fontFamily: FONTS.poppinsRegular,
            fontSize: FontSizes.tiny,
            textAlign: "center",
            marginTop: 10,
            width: "80%",
            marginBottom: _windowHeight * 0.07,
            color: "#a79e9f",
            letterSpacing: 0.8,
          }}
        >
          Timeless beauty,exquisite design, and effortless sophistication define
          luxury
        </Text>

        <SafeAreaView style={{ width: "100%", alignItems: "center" }}>
          <BigButton
            title="Get Started"
            onPress={() => {
              router.navigate("/luxuryECommerce/(auth)/signIn");
            }}
          />
        </SafeAreaView>
        {/* <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {}}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 60,
            width: "90%",
            backgroundColor: "black",
            marginTop: "auto",
            marginBottom: bottom,
            borderRadius: 100,
          }}
        >
          <Text style={{ fontFamily: FONTS.firaCodeSemiBold, color: "white" }}>
            Get Started
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default LandingScreen;

const RenderImage = ({ item, index }: { item: string; index: number }) => {
  return (
    <Image
      transition={500}
      source={{
        uri: item,
      }}
      style={styles.imageStyle}
    />
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    height: _imageHeight,
    width: _windowWidth * 0.6,
    borderRadius: _sliderGap,
    marginBottom: _sliderGap,
  },
});
