import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  _windowHeight,
  _windowWidth,
  FONTS,
  FontSizes,
} from "@/utils/constant";
import { LinearGradient } from "expo-linear-gradient";
import { MenuIcon } from "@/assets/svgs/luxuryECommSvgs/svgs";

const _viewList = new Array(3).fill(0).map((_, index) => ({ id: index }));
const _viewListItemSpacing = _windowHeight * 0.015;

const Home = () => {
  const { background, gray } = useThemeColor();
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f1f1",
      }}
    >
      <View
        style={{
          // height: _windowHeight / 4,
          width: _windowWidth,
          paddingHorizontal: _windowWidth * 0.03,
        }}
      >
        <LinearGradient
          start={{ x: 0.5, y: 0.5 }}
          colors={["#fee4e9", "#fff"]}
          style={[
            StyleSheet.absoluteFill,
            { borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
          ]}
        />

        <View
          style={{
            paddingTop: top + 10,
            paddingHorizontal: _windowWidth * 0.03,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: FontSizes.medium,
                fontFamily: FONTS.firaCodeMedium,
              }}
            >
              LUXURY
            </Text>
            <Text
              style={{ fontSize: FontSizes.small, color: "rgba(0,0,0,0.4)" }}
            >
              Cosmetics
            </Text>
          </View>
          <View
            style={{
              padding: (_windowWidth * 0.06) / 3.5,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.4)",
              borderRadius: 100,
            }}
          >
            <MenuIcon size={_windowWidth * 0.06} tint="rgba(0,0,0,0.4)" />
          </View>
        </View>
        <View
          style={{
            height: _windowHeight * 0.16,
            marginVertical: 10,
            marginTop: _viewListItemSpacing * _viewList.length,
          }}
        >
          {_viewList.map((item, index) => {
            const scale = 1 - (_viewList.length - 1 - index) * 0.07; // Reverse scaling
            return (
              <View
                key={item.id}
                style={{
                  height: _windowHeight * 0.16,
                  borderRadius: 10,
                  backgroundColor:
                    index === 2
                      ? "#ebdddd"
                      : index == 1
                      ? "#f2ecec"
                      : index === 0
                      ? "#f5f1f0"
                      : null,

                  position: "absolute",
                  width: "100%",
                  transform: [
                    { translateY: -index * _viewListItemSpacing },
                    { scaleX: Math.max(scale, 0.5) }, // Ensure minimum scale is 0.5
                    { scaleY: Math.max(scale, 0.5) }, // Apply uniform scaling
                  ],
                }}
              ></View>
            );
          })}
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#f0f1f1" }}></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
