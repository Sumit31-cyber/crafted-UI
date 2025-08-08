import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import { _horizontalPadding, SCREEN_WIDTH } from "@/utils/constant";
import { RFValue } from "react-native-responsive-fontsize";
import PinnedMemoirs from "./Components/PinnedMemoirs";
import AllMemoirs from "./Components/AllMemoirs";
import Animated, {
  SlideInRight,
  SlideOutRight,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import MemoirCard from "./Components/MemoirCard";
import { useSharedState } from "@/context/SharedContext";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import CustomText from "@/components/CustomText";
import { getCardHeight, getCardWidth } from "@/utils/functions";
import DeleteOverlay from "./Components/DeleteOverlay";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface LayoutType {
  x: number;
  y: number;
}

const DeleteAnimation = () => {
  const [layout, setLayout] = useState<LayoutType | null>(null);
  const { selectedMemoirItem, setSelectedMemoirItem, isSelectionEnabled } =
    useSharedState();
  const { top, bottom } = useSafeAreaInsets();

  const showOverlay = layout && selectedMemoirItem;
  return (
    <View style={styles.mainContainer}>
      <View style={{ flex: 1, paddingTop: top, paddingBottom: bottom }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            <Header />
            <SearchBar />
            <PinnedMemoirs />
            <AllMemoirs
              onLongPress={(e, memoirItem) => {
                const { locationX, locationY, pageX, pageY } = e.nativeEvent;
                setSelectedMemoirItem(memoirItem);

                setLayout({
                  y: pageY - locationY - _horizontalPadding / 2 - 1.5,
                  x: pageX - locationX - _horizontalPadding / 2 - 1,
                });
              }}
            />
          </View>
        </ScrollView>
        {showOverlay && (
          <Modal layout={layout} onPress={() => setLayout(null)} />
        )}
        <DeleteOverlay />
      </View>
    </View>
  );
};

export default DeleteAnimation;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: "#ececec" },
  innerContainer: {
    flex: 1,
    paddingHorizontal: _horizontalPadding,
    gap: RFValue(10),
  },
});

const ACTIONS = [
  { id: 0, title: "📌 Pin" },
  { id: 1, title: "🔒 Lock" },
  { id: 2, title: "📝 Edit" },
  { id: 3, title: "🧑‍🤝‍🧑 Contributors" },
  { id: 4, title: "⏸️ Pause" },
  { id: 5, title: "🗑️ Delete" },
];

const Modal = ({
  layout,
  onPress,
}: {
  layout: LayoutType;
  onPress: () => void;
}) => {
  const sharedX = useSharedValue(layout.x);
  const sharedY = useSharedValue(layout.y);
  const opacity = useSharedValue(0);
  const borderRadius = useSharedValue(12);
  const backgroundOpacity = useSharedValue(0);
  const rotate = useSharedValue(0);
  const { selectedMemoirItem, setIsSelectionEnabled } = useSharedState();
  const CARD_HEIGHT = getCardHeight();
  const CARD_WIDTH = getCardWidth();
  const [showAction, setShowAction] = useState(true);

  useEffect(() => {
    sharedX.value = withTiming(SCREEN_WIDTH / 2 - CARD_WIDTH + 10, {
      duration: 500,
    });
    sharedY.value = withTiming(SCREEN_HEIGHT / 2 - CARD_HEIGHT / 2, {
      duration: 500,
    });
    backgroundOpacity.value = withTiming(1, { duration: 300 });
    rotate.value = withTiming(5, { duration: 600 });
  }, []);

  const handleClose = () => {
    setShowAction(false);
    sharedX.value = withTiming(layout.x);
    sharedY.value = withTiming(layout.y);
    backgroundOpacity.value = withTiming(0);
    opacity.value = withTiming(0);
    rotate.value = withTiming(0, { duration: 500 });

    setTimeout(() => {
      onPress();
    }, 400);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      top: sharedY.value,
      left: sharedX.value,
      borderRadius: borderRadius.value,
      transform: [{ rotate: `-${rotate.value}deg` }],
    };
  });
  const rOpacity = useAnimatedStyle(() => ({
    opacity: backgroundOpacity.value,
  }));

  return (
    <View
      onTouchEnd={handleClose}
      style={[
        StyleSheet.absoluteFill,
        {
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      {showAction && (
        <View
          style={{
            alignSelf: "center",
            zIndex: 100,
            marginLeft: "auto",
            marginRight: _horizontalPadding + 10,
            gap: 20,
          }}
        >
          {ACTIONS.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  console.log(item.title);
                  if (item.title === "🗑️ Delete") {
                    setIsSelectionEnabled(true);
                  }
                }}
              >
                <Animated.View
                  entering={SlideInRight.delay(50 * index)
                    .springify()
                    .damping(14)}
                  exiting={SlideOutRight.delay(50 * index)
                    .springify()
                    .damping(12)}
                  style={{
                    backgroundColor: "white",
                    borderRadius: 100,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                  }}
                >
                  <CustomText variant="h7" fontFamily="FiraCodeBold">
                    {item.title}
                  </CustomText>
                </Animated.View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
      <Animated.View style={[StyleSheet.absoluteFill, rOpacity]}>
        <BlurView intensity={20} style={{ flex: 1 }}>
          <LinearGradient
            colors={["#4a6dd480", "#4a6dd4"]}
            style={{ flex: 1 }}
          ></LinearGradient>
        </BlurView>
      </Animated.View>
      <Animated.View style={[animatedStyle]}>
        {selectedMemoirItem && (
          <MemoirCard
            index={0}
            item={selectedMemoirItem}
            onLongPress={() => {}}
          />
        )}
      </Animated.View>
    </View>
  );
};
