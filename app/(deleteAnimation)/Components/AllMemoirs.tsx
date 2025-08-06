import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import SectionHeader from "./SectionHeader";
import { Ellipsis, ListFilter } from "lucide-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-gesture-handler";
import { _horizontalPadding, SCREEN_WIDTH } from "@/utils/constant";
import CustomText from "@/components/CustomText";
import MemoirCard from "./MemoirCard";

export const GAP = RFValue(10);
export const BORDER_RADIUS = RFValue(14);

export interface MemoirItem {
  id: number;
}

export interface AllMemoirsProps {
  onLongPress: (event: GestureResponderEvent, item: MemoirItem) => void;
}

const MOCK_DATA: MemoirItem[] = new Array(6)
  .fill(0)
  .map((_, index) => ({ id: index }));

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
