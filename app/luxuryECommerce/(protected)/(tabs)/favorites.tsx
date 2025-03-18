import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "expo-image";
import { removeItemFromFavorite } from "../../redux/slice/favoriteItemSlice";
import { RootState } from "../../redux/store";

const Favorite = () => {
  const { favoriteItems } = useSelector((state: RootState) => state.favorite);
  console.log(favoriteItems);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      {favoriteItems.map((item, index) => {
        return (
          <Image
            onTouchStart={() => {
              dispatch(removeItemFromFavorite({ id: item.id }));
            }}
            key={item.id}
            source={{ uri: item.image }}
            style={{ height: 100, width: 100, gap: 20 }}
          />
        );
      })}
      {/* <Text>{JSON.stringify(favoriteItems, null, 2)}</Text> */}
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
