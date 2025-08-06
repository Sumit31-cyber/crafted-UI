import { StyleSheet, View } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import CustomText from "@/components/CustomText";

interface PropTypes {
  icon: React.ReactNode;
  title: string;
  buttonTitle: string;
}
const SectionHeader = ({ icon, title, buttonTitle }: PropTypes) => {
  return (
    <View style={styles.headerContainer}>
      <CustomText variant="h3" fontFamily="FiraCodeBold">
        {title}
      </CustomText>
      <View style={styles.seeAllContainer}>
        <CustomText
          variant="h7"
          fontFamily="poppinsMedium"
          style={{ opacity: 0.6 }}
        >
          {buttonTitle}
        </CustomText>
        <View style={styles.iconContainer}>{icon}</View>
      </View>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  seeAllContainer: {
    backgroundColor: "#dfdfdf",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 5,
  },
  iconContainer: {
    height: RFValue(14),
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
