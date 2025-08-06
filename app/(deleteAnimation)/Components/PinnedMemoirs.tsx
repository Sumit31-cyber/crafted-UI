import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "@/components/CustomText";
import { RFValue } from "react-native-responsive-fontsize";
import { ChevronRight } from "lucide-react-native";
import SectionHeader from "./SectionHeader";
import PinnedMemoirCard from "./PinnedMemoirCard";

const MOCK_DATA = new Array(5).fill(0).map((_, index) => ({ id: index }));

const PinnedMemoirs = () => {
  const renderItem = (item: { id: number }, index: number) => {
    return <PinnedMemoirCard key={item.id} index={index} item={item} />;
  };
  return (
    <View>
      <SectionHeader
        title="Pined memoirs"
        icon={
          <ChevronRight color={"black"} size={RFValue(12)} strokeWidth={1.5} />
        }
        buttonTitle="See all"
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{ flexDirection: "row", gap: RFValue(14), marginVertical: 20 }}
        >
          {MOCK_DATA.map(renderItem)}
        </View>
      </ScrollView>
    </View>
  );
};

export default PinnedMemoirs;

const styles = StyleSheet.create({});
