import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/LuxuryECommerceRedux/store";
import { Image } from "expo-image";
import {
  decrementCartItem,
  incrementCartItem,
  removeItemFromCart,
} from "../../../redux/LuxuryECommerceRedux/slice/cartSlice";
import CustomHeader from "@/components/ui/LuxuryECommerce/CustomHeader";
import { _horizontalPadding, FONTS, FontSizes } from "@/utils/constant";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Cart = () => {
  // const { cartItems } = useSelector((state: RootState) => state.cart);
  // const dispatch = useDispatch();
  return (
    <SafeAreaView style={{}}>
      <View style={{ paddingHorizontal: 10 }}>
        <CustomHeader
          title="Cart"
          isBackButtonVisible={true}
          icon={<Entypo name="dots-three-vertical" size={16} color="black" />}
          onPress={() => {}}
        />
        <View
          style={{
            height: 160,
            width: "100%",
            backgroundColor: "rgba(1,1,1,0.1)",
            flexDirection: "row",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <View style={{ flex: 0.6, justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: FONTS.poppinsMedium,
                fontSize: FontSizes.large,
              }}
            >
              This is sample text
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: FONTS.poppinsRegular,
                  fontSize: FontSizes.small,
                }}
              >
                Review (4.9
              </Text>
              <View style={{ alignSelf: "center" }}>
                <AntDesign name="star" size={FontSizes.tiny} color="black" />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.poppinsRegular,
                  fontSize: FontSizes.small,
                }}
              >
                )
              </Text>
            </View>
            <Text
              style={{
                fontFamily: FONTS.poppinsMedium,
                fontSize: FontSizes.large,
              }}
            >
              12,234
            </Text>
          </View>
          <View
            style={{ flex: 0.4, backgroundColor: "yellow", borderRadius: 20 }}
          ></View>
        </View>
      </View>
    </SafeAreaView>
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
