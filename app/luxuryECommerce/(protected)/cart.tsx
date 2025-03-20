import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/LuxuryECommerceRedux/store";
import { Image } from "expo-image";
import {
  decrementCartItem,
  incrementCartItem,
  removeItemFromCart,
} from "../../../redux/LuxuryECommerceRedux/slice/cartSlice";
import CustomHeader from "@/components/ui/LuxuryECommerce/CustomHeader";
import {
  _horizontalPadding,
  _windowWidth,
  FONTS,
  FontSizes,
  LuxuryColors,
} from "@/utils/constant";
import { AntDesign, Entypo } from "@expo/vector-icons";
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
          backgroundColor: LuxuryColors.brandColor,
          bottom: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingVertical: 20,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          shadowColor: LuxuryColors.brandColor,
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.17,
          shadowRadius: 7.49,
          elevation: 12,
          paddingBottom: bottom,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: FontSizes.small,
              fontFamily: FONTS.poppinsRegular,
              color: "white",
            }}
          >
            Amount to pay
          </Text>
          <Text
            style={{
              fontSize: FontSizes.large,
              fontFamily: FONTS.poppinsMedium,
              color: "white",
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
            backgroundColor: "white",
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              fontSize: FontSizes.small,
              fontFamily: FONTS.poppinsRegular,
            }}
          >
            Proceed to checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // <SafeAreaView>
    //   {cartItems.map((item, index) => {
    //     return (
    //       <Pressable
    //         onPress={() => {}}
    //         key={item.id}
    //         style={{ alignItems: "center", justifyContent: "center" }}
    //       >
    //         <Image
    //           source={{ uri: item.image }}
    //           style={{ height: 100, width: 100, gap: 20 }}
    //         />
    //         <View
    //           style={{
    //             flexDirection: "row",
    //             gap: 10,
    //             alignItems: "center",
    //             justifyContent: "center",
    //           }}
    //         >
    //           <Text
    //             onPress={() => {
    //               dispatch(decrementCartItem(item));
    //             }}
    //             style={{ fontSize: 40, marginTop: 20 }}
    //           >
    //             -
    //           </Text>
    //           <Text style={{ fontSize: 40, marginTop: 20 }}>
    //             {item.cartItemCount}
    //           </Text>
    //           <Text
    //             onPress={() => {
    //               dispatch(incrementCartItem(item));
    //             }}
    //             style={{ fontSize: 40, marginTop: 20 }}
    //           >
    //             +
    //           </Text>
    //         </View>
    //       </Pressable>
    //     );
    //   })}
    // </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
