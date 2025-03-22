import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { _windowWidth, FONTS, FontSizes, LuxuryColors } from "@/utils/constant";
import { AntDesign } from "@expo/vector-icons";
import { CartType } from "@/constants/types";
import { Image } from "expo-image";
import { useDispatch } from "react-redux";
import {
  decrementCartItem,
  incrementCartItem,
} from "@/redux/LuxuryECommerceRedux/slice/cartSlice";

const CartCard = ({
  cartItem,
  index,
}: {
  cartItem: CartType;
  index: number;
}) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 20,
        padding: 10,
        borderWidth: StyleSheet.hairlineWidth * 2,
        borderColor: LuxuryColors.pink,
      }}
    >
      <View style={{ flex: 0.6, marginTop: 10 }}>
        <Text
          numberOfLines={2}
          style={{
            fontFamily: FONTS.poppinsMedium,
            fontSize: FontSizes.small,
            textTransform: "capitalize",
          }}
        >
          {cartItem.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.poppinsRegular,
              fontSize: FontSizes.small,
              color: LuxuryColors.gray,
            }}
          >
            Review (4.9
          </Text>
          <View style={{ alignSelf: "center" }}>
            <AntDesign
              name="star"
              size={FontSizes.tiny}
              color={LuxuryColors.gray}
            />
          </View>
          <Text
            style={{
              fontFamily: FONTS.poppinsRegular,
              fontSize: FontSizes.small,
              color: LuxuryColors.gray,
            }}
          >
            )
          </Text>
        </View>
        <Text
          style={{
            fontFamily: FONTS.poppinsMedium,
            fontSize: FontSizes.large,
            color: LuxuryColors.brandColor,
          }}
        >
          ₹{cartItem.price.toLocaleString()}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-start",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              dispatch(incrementCartItem(cartItem));
            }}
            style={{
              height: 38,
              aspectRatio: 1,
              backgroundColor: LuxuryColors.brandColor,
              borderRadius: 100,
              zIndex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
          <View
            style={{
              width: 80,
              backgroundColor: "#ffe6d5",
              left: -20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.poppinsMedium,
                fontSize: FontSizes.medium,
                textAlign: "center",
                paddingVertical: 2,
              }}
            >
              {cartItem.cartItemCount}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              dispatch(decrementCartItem(cartItem));
            }}
            style={{
              height: 38,
              aspectRatio: 1,
              borderWidth: StyleSheet.hairlineWidth * 2,
              borderColor: "#ffe6d5",
              borderRadius: 100,
              left: -40,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <AntDesign name="minus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        contentFit="fill"
        style={{
          flex: 0.4,
          borderRadius: 20,
          height: _windowWidth * 0.45,
        }}
        source={{ uri: cartItem.images[0] }}
      />
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({});
