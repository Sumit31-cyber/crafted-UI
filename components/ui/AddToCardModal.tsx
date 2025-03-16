import { View, StyleSheet, Text } from "react-native";
import React, { forwardRef, useMemo } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  useBottomSheet,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { _windowHeight, _windowWidth } from "@/utils/constant";
import CustomBackdrop from "./CustomBackdrop";
export type Ref = BottomSheetModal;

const AddToCardModal = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%", "75%"], []);

  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      snapPoints={snapPoints}
      index={0}
      backdropComponent={() => {
        return (
          <CustomBackdrop
            onBackdropPress={() => {
              console.log("df"), dismiss();
            }}
          />
        );
      }}
      ref={ref}
    >
      <BottomSheetView style={{ height: 300, width: _windowWidth }}>
        <Text>Awesome 🎉</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    height: _windowHeight / 2,
    backgroundColor: "white",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
  },
});

export default AddToCardModal;
