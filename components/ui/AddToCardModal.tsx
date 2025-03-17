import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { forwardRef, useCallback, useMemo, useState } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheet,
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
import CustomBackdrop from "./CustomBackdrop";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated, { FadeIn, FadeOut, ZoomIn } from "react-native-reanimated";
import { Image } from "expo-image";
export type Ref = BottomSheetModal;

const _padding = 12;
const sizeList = ["S", "M", "L", "XL"];
const AddToCardModal = forwardRef<Ref>((props, ref) => {
  const { dismiss } = useBottomSheetModal();
  const [itemsCount, setItemsCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const handleItemsCount = useCallback(
    (type: string) => {
      if (type === "increase") {
        setItemsCount((prev) => prev + 1);
      } else if (type === "decrease") {
        if (itemsCount > 1) {
          setItemsCount((prev) => prev - 1);
        }
      }
    },
    [itemsCount]
  );

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
      onChange={(change) => {
        if (change === -1) {
          setItemsCount(1);
        }
      }}
      backdropComponent={renderBackdrop}
      ref={ref}
    >
      <BottomSheetView>
        <View style={{ height: "auto", padding: _padding }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontFamily: FONTS.TNR, fontSize: FontSizes.large }}>
              Choose your size
            </Text>

            <View
              style={{
                flexDirection: "row",
                height: 40,
                backgroundColor: LuxuryColors.brandColor,
                padding: 10,
                borderRadius: 100,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  handleItemsCount("increase");
                }}
                style={{
                  height: "100%",
                  aspectRatio: 1,
                  backgroundColor: "white",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="plus" size={13} color="black" />
              </TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 30,
                  marginHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: FontSizes.small,
                    fontFamily: FONTS.poppinsBold,
                    color: "white",
                  }}
                >
                  {itemsCount}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  handleItemsCount("decrease");
                }}
                style={{
                  height: "100%",
                  aspectRatio: 1,
                  backgroundColor: "white",
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="minus" size={13} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginVertical: _padding }}>
            {sizeList.map((item, index) => {
              return (
                <View
                  key={item}
                  style={{
                    width: (_windowWidth - _padding * 2) / sizeList.length,
                    padding: 10,
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => {
                      setSelectedSize(item);
                    }}
                    style={{
                      height: "auto",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: StyleSheet.hairlineWidth * 2,
                      borderColor: LuxuryColors.liteGray,
                      borderRadius: 100,
                      backgroundColor:
                        item === selectedSize
                          ? LuxuryColors.brandColor
                          : "transparent",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: FontSizes.xLarge,
                        fontFamily: FONTS.poppinsRegular,
                        color: item === selectedSize ? "white" : "black",
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <View style={{ gap: 10 }}>
            <Text style={{ fontFamily: FONTS.TNR, fontSize: FontSizes.large }}>
              Product Details
            </Text>
            <Text
              numberOfLines={3}
              ellipsizeMode="clip"
              style={{
                fontFamily: FONTS.poppinsRegular,
                color: LuxuryColors.gray,
              }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout It is a
              long established{" "}
              <Text
                style={{
                  fontFamily: FONTS.poppinsMedium,
                  color: "black",
                  opacity: 0.6,
                }}
              >
                Read more...
              </Text>
            </Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <View
              style={{
                width: "100%",
                height: StyleSheet.hairlineWidth * 2,
                backgroundColor: LuxuryColors.liteGray,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              {_fakeUsers.slice(0, 5).map((item, index) => {
                return (
                  <View
                    key={item}
                    style={{
                      height: 40,
                      aspectRatio: 1,
                      borderRadius: 100,
                      borderWidth: StyleSheet.hairlineWidth * 2,
                      borderColor: LuxuryColors.liteGray,
                      marginLeft: index != 0 ? -8 : 0,
                      backgroundColor: "white",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      style={{ flex: 1 }}
                      transition={300}
                      source={{ uri: item }}
                    />
                  </View>
                );
              })}
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: FONTS.poppinsRegular,
                  color: LuxuryColors.gray,
                }}
              >
                5k+ people pinned this
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                height: StyleSheet.hairlineWidth * 2,
                backgroundColor: LuxuryColors.liteGray,
              }}
            ></View>
            <View style={{ flexDirection: "row", gap: 20, marginVertical: 30 }}>
              <View
                style={{
                  flex: 1,
                  height: 50,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: StyleSheet.hairlineWidth * 2,
                  borderColor: LuxuryColors.brandColor,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.poppinsRegular,
                    fontSize: FontSizes.medium,
                    color: LuxuryColors.brandColor,
                  }}
                >
                  Buy now
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  height: 50,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                  backgroundColor: LuxuryColors.brandColor,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.poppinsRegular,
                    fontSize: FontSizes.medium,
                    color: "white",
                  }}
                >
                  Add to cart
                </Text>
              </View>
            </View>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
  },
});

export default AddToCardModal;
