import { StyleSheet, View, GestureResponderEvent } from "react-native";
import React from "react";
import SectionHeader from "./SectionHeader";
import { ListFilter } from "lucide-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { _horizontalPadding } from "@/utils/constant";
import MemoirCard from "./MemoirCard";
import { MemoirItem } from "@/constants/types";

export const GAP = RFValue(10);
export const BORDER_RADIUS = RFValue(14);

export interface AllMemoirsProps {
  onLongPress: (event: GestureResponderEvent, item: MemoirItem) => void;
}

const MOCK_DATA: MemoirItem[] = [
  {
    id: 0,
    title: "Holiday Spots",
    imageCount: 34,
  },
  {
    id: 1,
    title: "Moodboard",
    imageCount: 123,
  },
  {
    id: 2,
    title: "Assets",
    imageCount: 54,
  },
  {
    id: 3,
    title: "Work Docs",
    imageCount: 22,
  },
  {
    id: 4,
    title: "Chimney",
    imageCount: 43,
  },
  {
    id: 5,
    title: "Movies",
    imageCount: 29,
  },
];

const AllMemoirs: React.FC<AllMemoirsProps> = ({ onLongPress }) => {
  return (
    <View>
      <SectionHeader
        title="All memoirs"
        buttonTitle="Showing all"
        icon={
          <ListFilter color={"black"} size={RFValue(9)} strokeWidth={1.5} />
        }
      />

      <View style={styles.gridContainer}>
        {MOCK_DATA.map((item, index) => {
          return (
            <MemoirCard
              key={item.id}
              item={item}
              index={index}
              onLongPress={(event) => onLongPress(event, item)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default AllMemoirs;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    gap: GAP,
    marginVertical: 20,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});
