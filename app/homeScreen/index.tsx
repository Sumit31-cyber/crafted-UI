import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text
        onPress={() => {
          router.navigate("/animatedCarousel");
        }}
      >
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
