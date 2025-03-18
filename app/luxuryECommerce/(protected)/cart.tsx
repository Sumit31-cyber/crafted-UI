import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Image } from "expo-image";
import {
  decrementCartItem,
  incrementCartItem,
  removeItemFromCart,
} from "../redux/slice/cartSlice";

const cart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      {cartItems.map((item, index) => {
        return (
          <Pressable
            onPress={() => {}}
            key={item.id}
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ height: 100, width: 100, gap: 20 }}
            />
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                onPress={() => {
                  dispatch(decrementCartItem(item));
                }}
                style={{ fontSize: 40, marginTop: 20 }}
              >
                -
              </Text>
              <Text style={{ fontSize: 40, marginTop: 20 }}>
                {item.cartItemCount}
              </Text>
              <Text
                onPress={() => {
                  dispatch(incrementCartItem(item));
                }}
                style={{ fontSize: 40, marginTop: 20 }}
              >
                +
              </Text>
            </View>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};

export default cart;

const styles = StyleSheet.create({});
