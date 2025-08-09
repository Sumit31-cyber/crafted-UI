import React, { useCallback, useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GestureResponderEvent } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";

import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import PinnedMemoirs from "./Components/PinnedMemoirs";
import AllMemoirs from "./Components/AllMemoirs";
import DeleteOverlay from "./Components/DeleteOverlay";
import MemoirActionModal from "./Components/MemoirActionModal";
import { useSharedState } from "@/context/SharedContext";
import { _horizontalPadding } from "@/utils/constant";
import { LayoutType, MemoirItem } from "@/constants/types";

const LAYOUT_CONFIG = {
  PADDING_OFFSET: _horizontalPadding / 2,
  RF_VALUE_OFFSET: RFValue(10) / 2,
} as const;

const THEME = {
  BACKGROUND_COLOR: "#ececec",
  CONTENT_GAP: RFValue(10),
} as const;

const MemoirScreen = () => {
  const [modalLayout, setModalLayout] = useState<LayoutType | null>(null);
  const { selectedMemoirItem, setSelectedMemoirItem } = useSharedState();
  const { top, bottom } = useSafeAreaInsets();
  const safeAreaContainerStyle = useMemo(
    () => ({
      flex: 1,
      paddingTop: top,
      paddingBottom: bottom,
    }),
    [top, bottom]
  );

  const calculateLayoutFromEvent = useCallback(
    (event: GestureResponderEvent): LayoutType => {
      const { locationX, locationY, pageX, pageY } = event.nativeEvent;

      return {
        x:
          pageX -
          locationX -
          LAYOUT_CONFIG.PADDING_OFFSET -
          LAYOUT_CONFIG.RF_VALUE_OFFSET,
        y:
          pageY -
          locationY -
          LAYOUT_CONFIG.PADDING_OFFSET -
          LAYOUT_CONFIG.RF_VALUE_OFFSET,
      };
    },
    []
  );

  const handleMemoirLongPress = useCallback(
    (event: GestureResponderEvent, memoirItem: MemoirItem) => {
      const layout = calculateLayoutFromEvent(event);
      setSelectedMemoirItem(memoirItem);
      setModalLayout(layout);
    },
    [calculateLayoutFromEvent, setSelectedMemoirItem]
  );

  const handleModalClose = useCallback(() => {
    setModalLayout(null);
    setSelectedMemoirItem(null);
  }, [setSelectedMemoirItem]);

  const handleActionSelect = useCallback(
    (action: string) => {
      switch (action) {
        case "pin":
          break;
        case "lock":
          break;
        case "edit":
          break;
        case "contributors":
          break;
        case "pause":
          break;
        case "delete":
          break;
        default:
          console.warn(`Unknown action: ${action}`);
      }
    },
    [selectedMemoirItem]
  );

  const shouldShowModal = Boolean(modalLayout && selectedMemoirItem);

  const mainContent = useMemo(
    () => (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.contentContainer}>
          <Header />
          <SearchBar />
          <PinnedMemoirs />
          <AllMemoirs onLongPress={handleMemoirLongPress} />
        </View>
      </ScrollView>
    ),
    [handleMemoirLongPress]
  );

  const actionModal = useMemo(
    () =>
      shouldShowModal &&
      modalLayout && (
        <MemoirActionModal
          layout={modalLayout}
          onPress={handleModalClose}
          onActionSelect={handleActionSelect}
        />
      ),
    [shouldShowModal, modalLayout, handleModalClose, handleActionSelect]
  );

  return (
    <View style={styles.mainContainer}>
      <View style={safeAreaContainerStyle}>
        {mainContent}
        {actionModal}
        <DeleteOverlay />
      </View>
    </View>
  );
};

export default React.memo(MemoirScreen);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND_COLOR,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: _horizontalPadding,
    gap: THEME.CONTENT_GAP,
  },
});
