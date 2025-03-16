import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { forwardRef, useMemo } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheet,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import {
  _windowHeight,
  _windowWidth,
  FONTS,
  FontSizes,
  LuxuryColors,
} from "@/utils/constant";
import CustomBackdrop from "./CustomBackdrop";
export type Ref = BottomSheetModal;

const _padding = 12;
const AddToCardModal = forwardRef<Ref>((props, ref) => {
  const sizeList = ["S", "M", "L", "XL"];

  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      backdropComponent={() => {
        return (
          <CustomBackdrop
            onBackdropPress={() => {
              dismiss();
            }}
          />
        );
      }}
      ref={ref}
    >
      <BottomSheetView style={{ height: 500, width: _windowWidth }}>
        <View style={{ flex: 1, padding: _padding }}>
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
            <Text style={{ fontFamily: FONTS.TNR, fontSize: FontSizes.small }}>
              Time left{"  "}
              <Text
                style={{
                  fontFamily: FONTS.poppinsMedium,
                  fontSize: FontSizes.small,
                }}
              >
                2h:45m:32s
              </Text>
            </Text>
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
                      console.log(item);
                    }}
                    style={{
                      height: "auto",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: StyleSheet.hairlineWidth * 2,
                      borderColor: LuxuryColors.liteGray,
                      borderRadius: 100,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: FontSizes.xLarge,
                        fontFamily: FONTS.poppinsRegular,
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
              {new Array(6)
                .fill(0)
                .map((_, index) => ({ id: index }))
                .map((item, index) => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        height: 40,
                        aspectRatio: 1,
                        borderRadius: 100,
                        borderWidth: StyleSheet.hairlineWidth * 2,
                        borderColor: LuxuryColors.liteGray,
                        marginLeft: index != 0 ? -8 : 0,
                        backgroundColor: "white",
                      }}
                    />
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
