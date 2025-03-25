import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
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
import { SimpleLineIcons } from "@expo/vector-icons";
import { CartIcon, FilterIcon } from "@/assets/svgs/luxuryECommSvgs/svgs";
import ProductCard from "@/components/ui/ProductCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useCustomHeader from "@/customHooks/LuxuryECommernceHooks/useCustomHeader";
import { MasonryFlashList } from "@shopify/flash-list";
import FavoriteFilterModal from "@/components/ui/LuxuryECommerce/FavoriteFilterModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const _numOfColumns = 2;
const Favorite = () => {
  const { favoriteItems } = useSelector((state: RootState) => state.favorite);
  const { Header, headerHeight } = useCustomHeader();
  const modalRef = useRef<BottomSheetModal>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (!selectedFilter) return favoriteItems;
    if (selectedFilter === "ALL") return favoriteItems;
    else if (selectedFilter === "DISCOUNTED")
      return favoriteItems.filter((item) => item.originalPrice > item.price);
    else if (selectedFilter === "NON_DISCOUNTED")
      return favoriteItems.filter((item) => item.originalPrice == item.price);
  }, [favoriteItems, selectedFilter]);

  return (
    <View style={{ flex: 1 }}>
      <BlurBackdrop />
      <FavoriteFilterModal
        ref={modalRef}
        selectedFilter={selectedFilter}
        onPress={(newFilter) => {
          console.log(newFilter);
          console.log(selectedFilter === newFilter);
          if (selectedFilter === newFilter) {
            setSelectedFilter(null);
            modalRef.current?.dismiss();
            return;
          }
          setSelectedFilter(newFilter);
          modalRef.current?.dismiss();
        }}
      />

      <Header
        title="Favorites"
        icon={<CartIcon size={"60%"} />}
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
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              modalRef.current?.present();
            }}
            style={{
              height: _windowWidth * 0.09,
              backgroundColor: LuxuryColors.liteBlack,
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
          </TouchableOpacity>
        </View>
      </Header>

      <MasonryFlashList
        data={filteredItems}
        numColumns={_numOfColumns}
        contentContainerStyle={{
          paddingTop: headerHeight + 15,
          paddingHorizontal: _horizontalPadding / _numOfColumns,
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={{ margin: _horizontalPadding / _numOfColumns }}>
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
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
