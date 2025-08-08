import {
  findNodeHandle,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CustomText from "@/components/CustomText";
import { RFValue } from "react-native-responsive-fontsize";
import { Ellipsis } from "lucide-react-native";
import { BORDER_RADIUS, GAP } from "./AllMemoirs";
import { _horizontalPadding } from "@/utils/constant";
import { useSharedState } from "@/context/SharedContext";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import { getCardHeight, getCardWidth } from "@/utils/functions";
import SelectorView from "./SelectorView";
import { MemoirItem, MemoirViewOffset } from "@/constants/types";

const MemoirCard = ({
  item,
  index,
  onLongPress,
  showSelector = true,
}: {
  item: MemoirItem;
  index: number;
  onLongPress: (event: GestureResponderEvent, item: MemoirItem) => void;
  showSelector?: boolean;
}) => {
  const CARD_WIDTH = getCardWidth();
  const CARD_HEIGHT = getCardHeight();
  const { isSelectionEnabled, toggleMemoirSelection } = useSharedState();
  const rotate = useSharedValue(0);

  // Create a ref to attach to the view
  const viewRef = useRef<View>(null);

  useEffect(() => {
    if (isSelectionEnabled) {
      const rotationMultiplier = index % 2 === 0 ? 1 : -1;
      rotate.value = withRepeat(
        withSequence(
          withTiming(-2 * rotationMultiplier, { duration: 80 }),
          withTiming(2 * rotationMultiplier, { duration: 120 }),
          withTiming(0, { duration: 80 })
        ),
        -1,
        true
      );
    } else {
      rotate.value = withTiming(0, { duration: 300 });
    }
  }, [isSelectionEnabled, index]);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  const handleOnSelect = () => {
    // setSelected(!selected);

    const node = findNodeHandle(viewRef.current);
    if (node) {
      UIManager.measure(node, (x, y, width, height, pageX, pageY) => {
        console.log({ x, y, width, height, pageX, pageY });
        toggleMemoirSelection({
          pageX,
          pageY,
          height,
          width,
          ...item,
        });
      });
    }
  };

  return (
    <TouchableOpacity
      onLongPress={(e) => onLongPress(e, item)}
      disabled={isSelectionEnabled}
      key={item.id}
    >
      <Animated.View
        ref={viewRef}
        style={[
          styles.memoirContainer,
          rStyle,
          {
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            borderRadius: BORDER_RADIUS,
          },
        ]}
      >
        <View
          style={[
            styles.imageSection,
            {
              height: CARD_HEIGHT * 0.7,
              width: CARD_WIDTH - GAP,
              borderRadius: BORDER_RADIUS,
              marginTop: GAP / 2,
            },
          ]}
        />
        <View
          style={[
            styles.informationContainer,
            {
              margin: GAP,
            },
          ]}
        >
          <View>
            <CustomText variant="h6" fontFamily="poppinsMedium">
              {item.title}
            </CustomText>
            <CustomText variant="h7" style={{ opacity: 0.4 }}>
              {item.imageCount} Images
            </CustomText>
          </View>
          <Ellipsis color={"black"} size={RFValue(14)} />
        </View>
      </Animated.View>

      {showSelector && <SelectorView id={item.id} onSelect={handleOnSelect} />}
    </TouchableOpacity>
  );
};

export default MemoirCard;

const styles = StyleSheet.create({
  memoirContainer: {
    backgroundColor: "#ffffff",
    borderColor: "white",
    borderWidth: 1,
  },
  imageSection: {
    backgroundColor: "#ececec",
    borderWidth: 5,
    borderColor: "white",
    alignSelf: "center",
  },
  informationContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
  },
});
