import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { forwardRef, useCallback, useMemo, useState } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import {
  _fakeUsers,
  _windowHeight,
  _windowWidth,
  FONTS,
  FontSizes,
  LuxuryColors,
} from "@/utils/constant";
import BlurBackdrop from "../BlurBackdrop";
import CustomBackdrop from "../CustomBackdrop";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  BoxIcon,
  DiscountIcon,
  NoDiscountIcon,
} from "@/assets/svgs/luxuryECommSvgs/svgs";
import { useDispatch } from "react-redux";
import { filterFavoriteItems } from "@/redux/LuxuryECommerceRedux/slice/favoriteItemSlice";
import { Feather } from "@expo/vector-icons";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
export type Ref = BottomSheetModal;

const _padding = 12;
type PropsType = {
  onPress: (val: string) => void;
  selectedFilter: string | null;
};
const FavoriteFilterModal = forwardRef<Ref, PropsType>(
  ({ onPress, selectedFilter }, ref) => {
    const { bottom } = useSafeAreaInsets();
    const { dismiss } = useBottomSheetModal();
    const dispatch = useDispatch();

    const renderBackdrop = useCallback(
      () => (
        <CustomBackdrop
          onBackdropPress={() => {
            dismiss();
          }}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        onChange={(change) => {}}
        backdropComponent={renderBackdrop}
        ref={ref}
      >
        <BottomSheetView>
          <View
            style={{ height: "auto", padding: _padding, paddingBottom: bottom }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.TNRBold,
                  fontSize: FontSizes.large,
                  letterSpacing: 0.8,
                }}
              >
                Availability
              </Text>
            </View>
            <FilterListItem
              title="Show only available products"
              icon={<BoxIcon tint={LuxuryColors.brandColor} size="70%" />}
              isSelected={selectedFilter === "ALL"}
              onPress={() => {
                onPress("ALL");
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.TNRBold,
                fontSize: FontSizes.large,
                letterSpacing: 0.8,
              }}
            >
              Discount
            </Text>
            <FilterListItem
              title="Show only discounted items"
              icon={<DiscountIcon tint={LuxuryColors.brandColor} size="60%" />}
              isSelected={selectedFilter === "DISCOUNTED"}
              onPress={() => {
                onPress("DISCOUNTED");
              }}
            />
            <FilterListItem
              title="Show only not discounted items"
              icon={
                <NoDiscountIcon tint={LuxuryColors.brandColor} size="50%" />
              }
              isSelected={selectedFilter === "NON_DISCOUNTED"}
              onPress={() => {
                onPress("NON_DISCOUNTED");
              }}
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default FavoriteFilterModal;

type FilterListItemProps = {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
  isSelected: boolean;
};
const FilterListItem = ({
  title,
  icon,
  onPress,
  isSelected,
}: FilterListItemProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{ paddingVertical: 20, gap: 10 }}
    >
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <View
          style={{
            height: 40,
            aspectRatio: 1,
            borderRadius: 100,
            backgroundColor: LuxuryColors.skin,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </View>
        <Text
          style={{
            fontFamily: FONTS.poppinsMedium,
            fontSize: FontSizes.medium,
          }}
        >
          {title}
        </Text>
        {isSelected && (
          <Animated.View
            entering={ZoomIn}
            exiting={ZoomOut}
            style={{
              height: 30,
              width: 30,
              borderRadius: 100,
              backgroundColor: "#29bf12",
              marginLeft: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="check" size={18} color="white" />
          </Animated.View>
        )}
      </View>
      <View
        style={{
          height: StyleSheet.hairlineWidth * 4,
          backgroundColor: LuxuryColors.coffee,
        }}
      />
    </TouchableOpacity>
  );
};
