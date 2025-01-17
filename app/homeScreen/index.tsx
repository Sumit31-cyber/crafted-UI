import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import AnimationListItem from "@/components/ui/AnimationListItem";
import { _animationLists, AnimationListItemType } from "@/utils/constant";
import { useThemeColor } from "@/hooks/useThemeColor";

const HomeScreen = () => {
  const COLOR = useThemeColor();

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: COLOR.background }}
    >
      {_animationLists.map((item, index) => {
        return (
          <AnimationListItem
            key={item.id}
            item={item}
            index={index}
            onPress={() => {
              router.navigate(item.path);
            }}
          />
        );
      })}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
