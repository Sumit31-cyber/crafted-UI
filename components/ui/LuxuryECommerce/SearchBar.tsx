import {
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { _windowWidth, FONTS, FontSizes, LuxuryColors } from "@/utils/constant";
import { EvilIcons } from "@expo/vector-icons";

type SearchBarProps = {
  style?: ViewStyle;
  textInputStyle?: TextStyle;
} & React.ComponentProps<typeof TextInput>;
const SearchBar: React.FC<SearchBarProps> = ({
  style,
  textInputStyle,
  ...props
}) => {
  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: "row",
          borderWidth: StyleSheet.hairlineWidth * 2,
          borderColor: LuxuryColors.pink,
          gap: 8,
          paddingHorizontal: 10,
          height: _windowWidth * 0.11,
          borderRadius: 100,
          alignItems: "center",
        },
        style,
      ]}
    >
      <EvilIcons name="search" size={24} color="rgba(0,0,0,0.6)" />
      <TextInput
        style={{
          fontFamily: FONTS.poppinsRegular,
          fontSize: FontSizes.small,
          flex: 1,
          ...textInputStyle,
        }}
        {...props}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
