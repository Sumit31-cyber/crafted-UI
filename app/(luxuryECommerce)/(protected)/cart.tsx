import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/LuxuryECommerceRedux/store";
import {
  _horizontalPadding,
  _windowWidth,
  FONTS,
  FontSizes,
  LuxuryColors,
} from "@/utils/constant";
import { Entypo } from "@expo/vector-icons";
import BlurBackdrop from "@/components/ui/BlurBackdrop";
import CartCard from "@/components/ui/LuxuryECommerce/CartCard";
import useCustomHeader from "@/customHooks/LuxuryECommernceHooks/useCustomHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Cart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { Header, headerHeight } = useCustomHeader();
  const { bottom } = useSafeAreaInsets();

  const totalItemPrice = useMemo(() => {
    const totalAmount = cartItems.reduce((sum, product) => {
      const price = product.price * product.cartItemCount;
      return sum + price;
    }, 0);
    return totalAmount;
  }, [cartItems]);

  return (
    <View style={{ flex: 1 }}>
      <BlurBackdrop style={{ backgroundColor: "white" }} />

      <Header
        title="Cart"
        isBackButtonVisible={true}
        icon={<Entypo name="dots-three-vertical" size={16} color="black" />}
        onPress={() => {}}
      />

      <FlatList
        data={cartItems}
        ListFooterComponent={<View style={{ height: 150 }} />}
        contentContainerStyle={{
          gap: 20,
          paddingHorizontal: 10,
          marginTop: 10,
          paddingTop: headerHeight,
        }}
        renderItem={({ item, index }) => {
          return <CartCard cartItem={item} index={index} />;
        }}
      />
      <View
        style={{
          position: "absolute",
          width: _windowWidth,
          backgroundColor: "white",
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingVertical: 20,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: bottom,
          borderWidth: StyleSheet.hairlineWidth * 2,
          borderColor: LuxuryColors.pink,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: FontSizes.small,
              fontFamily: FONTS.poppinsRegular,
              color: LuxuryColors.gray,
            }}
          >
            Amount to pay
          </Text>
          <Text
            style={{
              fontSize: FontSizes.large,
              fontFamily: FONTS.poppinsMedium,
            }}
          >
            ₹{totalItemPrice.toLocaleString()}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: "black",
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              fontSize: FontSizes.small,
              fontFamily: FONTS.poppinsRegular,
              color: "white",
            }}
          >
            Proceed To Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
