import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useCallback, useContext, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { COLOR, Theme } from "@/app/(themeToggleSwitch)";

const ThemeSwitchSegmentController = ({
  selected,
  theme,
  onPress,
}: {
  selected: string;
  theme: Theme;
  onPress: (val: string) => void;
}) => {
  const { width } = useWindowDimensions();
  const CONTROL_WIDTH = width * 0.8;
  const CONTROL_HEIGHT = 60;
  const translateX = useSharedValue(0);
  const activeThemeColor = theme.mode === "dark" ? COLOR.dark : COLOR.light;

  useEffect(() => {
    handleSwitchPress(selected);
  }, [selected]);

  const handleSwitchPress = useCallback(
    (val: string) => {
      "worklet";
      if (val == "light") {
        translateX.value = withTiming(0, {
          duration: 300,
        });
      } else if (val == "dark") {
        translateX.value = withTiming((CONTROL_WIDTH / 3) * 1, {
          duration: 300,
        });
      } else {
        translateX.value = withTiming((CONTROL_WIDTH / 3) * 2, {
          duration: 300,
        });
      }
    },
    [selected]
  );

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View
      style={{
        height: CONTROL_HEIGHT,
        width: CONTROL_WIDTH,
        borderRadius: 100,
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: activeThemeColor.switchBackground,
      }}
    >
      <Animated.View
        style={[
          rStyle,
          styles.animatedContainerStyle,
          {
            height: CONTROL_HEIGHT,
            width: CONTROL_WIDTH / 3,
          },
        ]}
      >
        <View
          style={[
            styles.selectedContainerStyle,
            { backgroundColor: activeThemeColor.switch },
          ]}
        ></View>
      </Animated.View>
      <Pressable
        onPress={() => {
          onPress("light");
        }}
        style={{
          width: CONTROL_WIDTH / 3,
          height: CONTROL_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            styles.textStyle,
            {
              color: activeThemeColor.textColor,
            },
          ]}
        >
          Light
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          onPress("dark");
        }}
        style={{
          width: CONTROL_WIDTH / 3,
          height: CONTROL_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            styles.textStyle,
            {
              color: activeThemeColor.textColor,
            },
          ]}
        >
          Dark
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          onPress("system");
        }}
        style={{
          width: CONTROL_WIDTH / 3,
          height: CONTROL_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={[styles.textStyle, { color: activeThemeColor.textColor }]}>
          System
        </Text>
      </Pressable>
    </View>
  );
};

export default ThemeSwitchSegmentController;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    fontWeight: "400",
  },
  selectedContainerStyle: {
    flex: 1,
    margin: 8,
    borderRadius: 100,
    shadowColor: "#6c757d",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 2.6,
    elevation: 5,
  },
  animatedContainerStyle: {
    position: "absolute",
    zIndex: -1,
    alignSelf: "center",
    justifyContent: "center",
  },
});
