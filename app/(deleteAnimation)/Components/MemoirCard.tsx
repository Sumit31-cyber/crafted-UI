import {
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomText from "@/components/CustomText";
import { RFValue } from "react-native-responsive-fontsize";
import { Ellipsis, ZoomIn, ZoomOut } from "lucide-react-native";
import { BORDER_RADIUS, GAP, MemoirItem } from "./AllMemoirs";
import { _horizontalPadding, SCREEN_WIDTH } from "@/utils/constant";
import { useSharedState } from "@/context/SharedContext";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  withSequence,
  ZoomInUp,
  ZoomOutDown,
  ZoomInEasyDown,
} from "react-native-reanimated";
import { getCardHeight, getCardWidth } from "@/utils/functions";
import SelectorView from "./SelectorView";

const MemoirCard = ({
  item,
  index,
  onLongPress,
}: {
  item: MemoirItem;
  index: number;
  onLongPress: (event: GestureResponderEvent, item: MemoirItem) => void;
}) => {
  const CARD_WIDTH = getCardWidth();
  const CARD_HEIGHT = getCardHeight();
  const { deleteMemoirs, setDeleteMemoirs } = useSharedState();
  const rotate = useSharedValue(0);
  const selectorSize = useSharedValue(0);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (deleteMemoirs) {
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
      selectorSize.value = withTiming(20, { duration: 300 });
    } else {
      rotate.value = withTiming(0, { duration: 300 });
      selectorSize.value = withTiming(0, { duration: 300 });
    }
  }, [deleteMemoirs, index]);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  return (
    <TouchableOpacity
      onLongPress={(e) => onLongPress(e, item)}
      disabled={deleteMemoirs}
      key={item.id}
    >
      <Animated.View
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
              Holiday spots
            </CustomText>
            <CustomText variant="h7" style={{ opacity: 0.4 }}>
              34 Images
            </CustomText>
          </View>
          <Ellipsis color={"black"} size={RFValue(14)} />
        </View>
      </Animated.View>

      <SelectorView selected={selected} setSelected={setSelected} />
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
