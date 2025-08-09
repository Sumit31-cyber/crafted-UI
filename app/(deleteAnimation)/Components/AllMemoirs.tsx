import { StyleSheet, View, GestureResponderEvent } from "react-native";
import React from "react";
import SectionHeader from "./SectionHeader";
import { ListFilter } from "lucide-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { _horizontalPadding, MOCK_DATA } from "@/utils/constant";
import MemoirCard from "./MemoirCard";
import { MemoirItem } from "@/constants/types";
import { useSharedState } from "@/context/SharedContext";

export const GAP = RFValue(10);
export const BORDER_RADIUS = RFValue(14);

export interface AllMemoirsProps {
  onLongPress: (event: GestureResponderEvent, item: MemoirItem) => void;
}

const AllMemoirs: React.FC<AllMemoirsProps> = ({ onLongPress }) => {
  const { selectedMemoirItem } = useSharedState();

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
            <View
              key={item.id}
              style={{
                opacity: selectedMemoirItem?.id === item.id ? 0 : 1,
              }}
            >
              <MemoirCard
                key={item.id}
                item={item}
                index={index}
                onLongPress={(event) => onLongPress(event, item)}
              />
            </View>
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
