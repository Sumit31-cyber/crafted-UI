import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import AnimationListItem from "@/components/ui/AnimationListItem";
import { _animationLists } from "@/utils/constant";

const HomeScreen = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "white" }}
    >
      {_animationLists.map((item, index) => {
        return <AnimationListItem key={item.id} item={item} index={index} />;
      })}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
