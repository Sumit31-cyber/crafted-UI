import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import BlurBackdrop from "@/components/ui/BlurBackdrop";
import {
  _borderWidth,
  _horizontalPadding,
  _searchBarHeight,
  _windowWidth,
  FONTS,
  FontSizes,
  LuxuryColors,
} from "@/utils/constant";
import useCustomHeader from "@/customHooks/LuxuryECommernceHooks/useCustomHeader";
import { CartIcon, MenuIconSquare } from "@/assets/svgs/luxuryECommSvgs/svgs";
import SearchBar from "@/components/ui/LuxuryECommerce/SearchBar";
import BarCodeView from "@/components/ui/LuxuryECommerce/BarCodeView";
import OfferCarousal from "@/components/ui/LuxuryECommerce/OfferCarousal";

const _categoryList = ["Men", "Women", "Kids"];
const Shop = () => {
  const { Header, headerHeight } = useCustomHeader();
  const [selectedCategory, setSelectedCategory] = useState("Men");
  return (
    <View style={{ flex: 1 }}>
      <BlurBackdrop />

      <Header
        icon={<CartIcon size={"60%"} />}
        onPress={() => {}}
        title="Shop"
      />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            paddingTop: headerHeight + 10,
            paddingHorizontal: _horizontalPadding,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
              alignItems: "center",
            }}
          >
            <SearchBar
              cursorColor={"#111"}
              selectionColor={LuxuryColors.gray}
              placeholder="Type to search..."
              onChangeText={(e) => {}}
            />
            <BarCodeView />
          </View>
          <CategorySelector
            onPress={(category) => {
              setSelectedCategory(category);
            }}
            selectedCategory={selectedCategory}
            style={{ marginVertical: 10 }}
          />
          <OfferCarousal style={{ marginVertical: 20 }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({});

type CategorySelectorType = {
  onPress: (category: string) => void;
  style?: ViewStyle;
  selectedCategory: string;
};
const CategorySelector = ({
  onPress,
  selectedCategory,
  style,
}: CategorySelectorType) => {
  return (
    <View
      style={[{ flexDirection: "row", justifyContent: "space-between" }, style]}
    >
      <View style={{ flexDirection: "row", gap: 4 }}>
        {_categoryList.map((item, index) => {
          const isSelected = selectedCategory === item;
          return (
            <TouchableOpacity
              onPress={() => {
                onPress(item);
              }}
              activeOpacity={0.8}
              key={item}
              style={{
                paddingHorizontal: 18,
                height: _searchBarHeight,
                borderWidth: _borderWidth,
                borderColor: LuxuryColors.pink,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
                backgroundColor: isSelected ? "#28231f" : "transparent",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.poppinsRegular,
                  fontSize: FontSizes.small,
                  color: isSelected ? "white" : LuxuryColors.gray,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={{
          height: _searchBarHeight,
          aspectRatio: 1,
          backgroundColor: "rgba(252,252,252,0.8)",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
        }}
      >
        <MenuIconSquare size="60%" />
      </View>
    </View>
  );
};
