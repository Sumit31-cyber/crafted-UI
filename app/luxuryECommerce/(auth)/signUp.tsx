import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const signUp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          router.navigate("/luxuryECommerce/(auth)/signIn");
        }}
      >
        SignUp Screen
      </Text>
    </View>
  );
};

export default signUp;

const styles = StyleSheet.create({});
