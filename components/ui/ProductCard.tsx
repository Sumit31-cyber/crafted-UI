import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { ProductType } from "@/constants/types";
import {
  _horizontalPadding,
  _windowWidth,
  FONTS,
  FontSizes,
  LuxuryColors,
} from "@/utils/constant";
import { Image } from "expo-image";
import { FontAwesome6 } from "@expo/vector-icons";
import { Fire } from "@/assets/svgs/luxuryECommSvgs/svgs";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import AddToCardModal from "./AddToCardModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToFavorite,
  removeItemFromFavorite,
} from "@/app/luxuryECommerce/redux/slice/favoriteItemSlice";
import { RootState } from "@/app/luxuryECommerce/redux/store";
import { addItemToCart } from "@/app/luxuryECommerce/redux/slice/cartSlice";

const _itemGap = 10;
const _containerSize = _windowWidth / 2 - _horizontalPadding - _itemGap;
const _imageSize = _containerSize;
const ProductCard = ({
  item,
  index,
  onPress,
}: {
  item: ProductType;
  index: number;
  onPress: () => void;
}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { dismiss } = useBottomSheetModal();
  const { favoriteItems } = useSelector((state: RootState) => state.favorite);
  // const [isLiked, setIsLiked] = useState(false);

  const dispatch = useDispatch();

  const isLiked = useMemo(() => {
    const likedResponse = favoriteItems.some(
      (someItem, index) => item.id === someItem.id
    );
    return likedResponse;
  }, [favoriteItems]);

  const toggleFavorite = () => {
    if (!isLiked) dispatch(addItemToFavorite(item));
    else dispatch(removeItemFromFavorite({ id: item.id }));
  };

  return (
    <Pressable
      onPress={() => {
        dispatch(addItemToCart(item));
      }}
      style={{
        width: _containerSize,
        alignItems: "center",
      }}
    >
      <AddToCardModal ref={bottomSheetRef} />
      <View
        style={{
          width: _containerSize,
          borderRadius: 10,
          overflow: "hidden",
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: LuxuryColors.liteGray,
        }}
      >
        <View
          style={{
            height: _imageSize + 20,
            width: "100%",
            padding: 3,
          }}
        >
          <TouchableOpacity
            onPress={() => toggleFavorite()}
            activeOpacity={0.6}
            style={{
              position: "absolute",
              height: _windowWidth * 0.06,
              aspectRatio: 1,
              backgroundColor: "white",
              borderRadius: 100,
              right: 10,
              top: 10,
              zIndex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isLiked ? (
              <Fire size={"70%"} tint={LuxuryColors.brandColor} />
            ) : (
              <Fire
                size={"70%"}
                tint={"transparent"}
                strokeColor={LuxuryColors.brandColor}
              />
            )}
          </TouchableOpacity>
          <Image
            contentFit="fill"
            source={{ uri: item.image }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{ gap: 10, padding: 8 }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: FONTS.poppinsMedium,
              fontSize: FontSizes.small,
              textTransform: "capitalize",
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.poppinsMedium,
              fontSize: FontSizes.large,
              color: LuxuryColors.brandColor,
            }}
          >
            ₹{item.price}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: _windowWidth * 0.07,
                backgroundColor: "rgba(251, 154, 101,0.2)",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "flex-start",
                paddingHorizontal: 10,
                marginRight: 10,
              }}
            >
              <Text
                style={{
                  fontSize: FontSizes.small,
                  fontFamily: FONTS.poppinsBold,
                  color: LuxuryColors.brandColor,
                }}
              >
                {item.discount}
              </Text>
            </View>
            <Text
              style={{
                fontSize: FontSizes.xTiny,
                fontFamily: FONTS.poppinsRegular,
                color: LuxuryColors.gray,
                textDecorationLine: "line-through",
              }}
            >
              ₹{item.original_price}
            </Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                console.log("Called");
                bottomSheetRef.current?.present();
              }}
              style={{
                height: _windowWidth * 0.07,
                aspectRatio: 1,
                backgroundColor: "#fb9a65",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
              }}
            >
              <FontAwesome6 name="plus" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
