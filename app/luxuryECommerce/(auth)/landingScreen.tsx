import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Marquee } from "@animatereactnative/marquee";
import { _windowHeight, _windowWidth } from "@/utils/constant";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";

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

const LandingScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />

      <View
        style={{
          height: _windowHeight * 0.8,
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
          }}
          speed={0.4}
          direction="vertical"
        >
          {_firstRowImages.map((item, index) => {
            return <RenderImage item={item} index={index} />;
          })}
        </Marquee>

        <Marquee
          style={{
            height: "100%",
            width: _windowWidth * 0.6,
            overflow: "hidden",
          }}
          speed={0.4}
          direction="vertical"
          reverse
        >
          {_secondRowImages.map((item, index) => {
            return <RenderImage item={item} index={index} />;
          })}
        </Marquee>
      </View>

      <LinearGradient
        start={{ x: 0.5, y: 0.5 }}
        colors={["#febcbd", "#fff1f1"]}
        style={[StyleSheet.absoluteFill, { opacity: 0.5 }]}
      />
    </View>
  );
};

export default LandingScreen;

const RenderImage = ({ item, index }: { item: string; index: number }) => {
  return (
    <Image
      key={`Image-${index}`}
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
