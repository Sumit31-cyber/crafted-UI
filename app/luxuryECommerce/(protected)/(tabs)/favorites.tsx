import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "expo-image";
import { removeItemFromFavorite } from "../../../../redux/LuxuryECommerceRedux/slice/favoriteItemSlice";
import { RootState } from "../../../../redux/LuxuryECommerceRedux/store";
import { router } from "expo-router";
import BlurBackdrop from "@/components/ui/BlurBackdrop";
import {
  _headerHeight,
  _horizontalPadding,
  _windowWidth,
  FONTS,
  FontSizes,
  LuxuryColors,
} from "@/utils/constant";
import CustomHeader from "@/components/ui/LuxuryECommerce/CustomHeader";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FilterIcon, Fire } from "@/assets/svgs/luxuryECommSvgs/svgs";
import ProductCard from "@/components/ui/ProductCard";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useCustomHeader from "@/customHooks/LuxuryECommernceHooks/useCustomHeader";
import { MasonryFlashList } from "@shopify/flash-list";

const _itemGap = 10;
const Favorite = () => {
  const { favoriteItems } = useSelector((state: RootState) => state.favorite);
  const { top } = useSafeAreaInsets();
  const { Header, headerHeight } = useCustomHeader();
  console.log(headerHeight);
  return (
    <View style={{ flex: 1 }}>
      <BlurBackdrop />

      <Header
        title="Favorites"
        icon={<SimpleLineIcons name="handbag" size={18} color="black" />}
        onPress={() => {
          router.navigate("/luxuryECommerce/(protected)/cart");
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.poppinsRegular,
              fontSize: FontSizes.large,
              color: "black",
            }}
          >
            Products
          </Text>
          <View
            style={{
              height: _windowWidth * 0.09,
              backgroundColor: LuxuryColors.brandColor,
              borderRadius: 100,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 14,
              gap: 6,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.poppinsRegular,
                fontSize: FontSizes.tiny,
                letterSpacing: 0.6,
                color: "white",
              }}
            >
              Filter
            </Text>
            <FilterIcon size={20} strokeWidth={1.5} tint={"white"} />
          </View>
        </View>
      </Header>

      <MasonryFlashList
        data={favoriteItems}
        numColumns={2}
        contentContainerStyle={{
          paddingTop: headerHeight + 15,
          paddingHorizontal: _horizontalPadding,
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={{ margin: _horizontalPadding / 2 }}>
              <ProductCard
                key={item.id}
                item={item}
                index={index}
                onPress={() => {}}
              />
            </View>
          );
        }}
        estimatedItemSize={200}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingTop: headerHeight + 15,
            paddingHorizontal: _horizontalPadding,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: _itemGap * 2,
              marginBottom: 30,
            }}
          >
            {favoriteItems.map((item, index) => {
              return (
                <ProductCard
                  key={item.id}
                  item={item}
                  index={index}
                  onPress={() => {}}
                />
              );
            })}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        ></View>
      </ScrollView> */}

      {/* <BlurView
          intensity={100}
          onLayout={(e) => {
            console.log();
            setHederHeight(e.nativeEvent.layout.height);
          }}
          style={{
            position: "absolute",
            padding: _horizontalPadding,
            paddingTop: top,
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <CustomHeader
            title="Favorites"
            icon={<SimpleLineIcons name="handbag" size={18} color="black" />}
            onPress={() => {
              router.navigate("/luxuryECommerce/(protected)/cart");
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.poppinsRegular,
                fontSize: FontSizes.large,
                color: "black",
              }}
            >
              Products
            </Text>
            <View
              style={{
                height: _windowWidth * 0.09,
                backgroundColor: LuxuryColors.brandColor,
                borderRadius: 100,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 14,
                gap: 6,
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.poppinsRegular,
                  fontSize: FontSizes.tiny,
                  letterSpacing: 0.6,
                  color: "white",
                }}
              >
                Filter
              </Text>
              <FilterIcon size={20} strokeWidth={1.5} tint={"white"} />
            </View>
          </View>
        </BlurView> */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingTop: headerHeight - top,
            paddingHorizontal: _horizontalPadding,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: _itemGap * 2,
              marginBottom: 30,
            }}
          >
            {favoriteItems.map((item, index) => {
              return (
                <ProductCard
                  key={item.id}
                  item={item}
                  index={index}
                  onPress={() => {}}
                />
              );
            })}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
        </View>
      </ScrollView> */}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
