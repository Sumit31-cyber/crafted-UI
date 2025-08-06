import { StyleSheet, View } from "react-native";
import React from "react";
import { Search } from "lucide-react-native";
import { _horizontalPadding } from "@/utils/constant";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "@/components/CustomText";

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <Search color={"black"} />
      <CustomText variant="h6" color={"gray"}>
        Search through your memoir
      </CustomText>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: RFValue(12),
    borderRadius: RFValue(14),
    alignItems: "center",
    gap: 10,
  },
});
