import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import BlurBackdrop from "@/components/ui/BlurBackdrop";
import {
  _horizontalPadding,
  _windowWidth,
  LuxuryColors,
} from "@/utils/constant";
import useCustomHeader from "@/customHooks/LuxuryECommernceHooks/useCustomHeader";
import { CartIcon } from "@/assets/svgs/luxuryECommSvgs/svgs";
import SearchBar from "@/components/ui/LuxuryECommerce/SearchBar";
import BarCodeView from "@/components/ui/LuxuryECommerce/BarCodeView";

const Shop = () => {
  const { Header, headerHeight } = useCustomHeader();
  return (
    <View style={{ flex: 1 }}>
      <BlurBackdrop />

      <Header
        icon={<CartIcon size={"60%"} />}
        onPress={() => {}}
        title="Shop"
      />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            paddingTop: headerHeight + 10,
            paddingHorizontal: _horizontalPadding,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
              alignItems: "center",
            }}
          >
            <SearchBar
              cursorColor={"#111"}
              selectionColor={LuxuryColors.gray}
              placeholder="Type to search..."
              onChangeText={(e) => {
                console.log(e);
              }}
            />
            <BarCodeView />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({});
