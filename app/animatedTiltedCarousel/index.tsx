import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import Header from "./components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GetPremiumCard from "./components/GetPremiumCard";
import ImageCarousel from "./components/ImageCarousel";
import NewMoviesSection from "./components/NewMoviesSection";
import { _windowHeight } from "@/utils/constant";

const Page = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: "#0b1118" }}>
      <Header />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: top + _windowHeight * 0.02 }}
        >
          <GetPremiumCard />
          <ImageCarousel />
          <NewMoviesSection />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Page;
