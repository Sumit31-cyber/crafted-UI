import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
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
import { Image } from "expo-image";

const _viewList = new Array(3).fill(0).map((_, index) => ({ id: index }));
const _categories = [
  { type: "All", image: require("@/assets/images/menu.png") },
  {
    type: "Dress",
    image: require("@/assets/images/women-dress-svgrepo-com.png"),
  },
  { type: "Clothes", image: require("@/assets/images/icons8-jacket-64.png") },
  { type: "Pants", image: require("@/assets/images/icons8-trousers-64.png") },
  { type: "Shoes", image: require("@/assets/images/icons8-shoes-90.png") },
];
const _viewListItemSpacing = _windowHeight * 0.015;

const Home = () => {
  const { background, gray } = useThemeColor();
  const { top } = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState("All");
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
        <OfferView />
      </View>

      <View style={{ flex: 1, backgroundColor: "#f0f1f1" }}>
        <Categories
          selectedCategory={selectedCategory}
          onPress={(type) => {
            setSelectedCategory(type);
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

const Categories = ({
  selectedCategory,
  onPress,
}: {
  selectedCategory: string;
  onPress: (type: string) => void;
}) => {
  return (
    <View style={{}}>
      <Text
        style={{
          paddingHorizontal: _windowWidth * 0.04,
          marginTop: 20,
          fontFamily: FONTS.TNRBold,
          fontSize: FontSizes.large,
          letterSpacing: 0.8,
        }}
      >
        Shipshape
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: _windowWidth * 0.05,
        }}
      >
        {_categories.map((item, index) => {
          const isSelected = item.type === selectedCategory;
          return (
            <TouchableOpacity
              key={item.type}
              activeOpacity={0.6}
              onPress={() => {
                onPress(item.type);
              }}
              style={{ alignItems: "center", gap: 5 }}
            >
              <View
                style={{
                  width:
                    _windowWidth / _categories.length - _windowWidth * 0.03,
                  aspectRatio: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 100,
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width:
                      index === 0
                        ? _windowWidth * 0.07
                        : index === 1
                        ? _windowWidth * 0.08
                        : _windowWidth * 0.1,
                    aspectRatio: 1,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: FontSizes.tiny,
                  fontFamily: FONTS.poppinsSemibold,
                  color: isSelected ? "black" : "#8d8b8c",
                }}
              >
                {item.type}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const OfferView = () => {
  return (
    <View
      style={{
        height: _windowHeight * 0.16,
        marginVertical: 10,
        marginTop: _viewListItemSpacing * _viewList.length * 1.5,
      }}
    >
      {_viewList.map((item, index) => {
        const scale = 1 - (_viewList.length - 1 - index) * 0.07; // Reverse scaling
        return (
          <View
            key={item.id}
            //@ts-ignore
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
          >
            {index == _viewList.length - 1 && (
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingHorizontal: 10,
                    gap: 10,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontFamily: FONTS.TNRBold,
                        fontSize: FontSizes.xLarge,
                      }}
                    >
                      Get 40% off for
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTS.TNRBold,
                        fontSize: FontSizes.xLarge,
                      }}
                    >
                      all items
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: FONTS.poppinsRegular,
                      fontSize: FontSizes.tiny,

                      color: "#8d8b8c",
                    }}
                  >
                    Promo until 31 May 2025
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: "auto",
                    flex: 1.2,
                  }}
                >
                  <Image
                    source={require("@/assets/images/girl-png.png")}
                    style={{
                      height: _windowHeight * 0.2,
                      top: -_windowHeight * 0.04,
                    }}
                  />
                </View>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};
