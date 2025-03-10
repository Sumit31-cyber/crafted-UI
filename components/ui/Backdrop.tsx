import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Backdrop = () => {
  return (
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      colors={["#febcbd", "#fff1f1"]}
      style={[StyleSheet.absoluteFill, { opacity: 0.5 }]}
    />
  );
};

export default Backdrop;
