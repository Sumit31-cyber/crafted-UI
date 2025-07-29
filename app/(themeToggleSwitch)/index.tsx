import { Pressable, View, StyleSheet, Text, Appearance } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AnimatedSphere from "@/components/ui/AnimatedSphere";
import ThemeSwitchSegmentController from "@/components/ui/ThemeSwitchSegmentController";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export const COLOR = {
  light: {
    backgroundColor: "#fff",
    textColor: "#343a40",
    switch: "#fff",
    switchBackground: "#E7E7E8",
  },
  dark: {
    backgroundColor: "#26242F",
    textColor: "#ced4da",
    switch: "#34323E",
    switchBackground: "#201C28",
  },
};

export interface Theme {
  mode: string;
  system: boolean;
}

const ThemeToggleSwitch = () => {
  const { top, bottom } = useSafeAreaInsets();

  const [theme, setTheme] = useState<Theme>({ mode: "light", system: true });
  const [selected, setSelected] = useState<string>(theme.mode);
  const activeThemeColor = theme.mode === "dark" ? COLOR.dark : COLOR.light;

  useEffect(() => {
    if (selected === "light") {
      updateTheme({ mode: "light", system: false });
    } else if (selected === "dark") {
      updateTheme({ mode: "dark", system: false });
    } else if (selected === "system") {
      updateTheme({ mode: "light", system: true });
    }
  }, [selected]);

  const updateTheme = (newTheme: Theme) => {
    let mode: string;

    if (newTheme.system) {
      const systemColorScheme = Appearance.getColorScheme();
      mode = systemColorScheme === "dark" ? "dark" : "light";
      setTheme({ mode, system: true });
    } else {
      setTheme({ mode: newTheme.mode, system: false });
    }
  };

  return (
    <View
      style={{
        backgroundColor: activeThemeColor.backgroundColor,
        flex: 1,
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      <StatusBar style={theme.mode === "dark" ? "light" : "dark"} />

      <Pressable
        onPress={() => router.back()}
        style={{
          backgroundColor: activeThemeColor.switch,
          height: 40,
          width: 40,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color={activeThemeColor.textColor}
        />
      </Pressable>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AnimatedSphere theme={theme.mode} />
        <View style={{ marginVertical: 30 }}>
          <Text
            style={{
              marginBottom: 20,
              fontSize: 25,
              fontWeight: "700",
              color: activeThemeColor.textColor,
              textAlign: "center",
            }}
          >
            Choose a Style
          </Text>

          <Text
            style={{
              marginVertical: 3,
              fontSize: 16,
              fontWeight: "500",
              color: activeThemeColor.textColor,
              textAlign: "center",
            }}
          >
            Pop or Subtle. Day or Night.
          </Text>
          <Text
            style={{
              marginBottom: 30,
              fontSize: 16,
              fontWeight: "500",
              color: activeThemeColor.textColor,
              textAlign: "center",
            }}
          >
            Customize your interface.
          </Text>
        </View>
        <ThemeSwitchSegmentController
          selected={selected}
          theme={theme}
          onPress={(val: string) => {
            setSelected(val);
          }}
        />
      </View>
      <BottomActions theme={theme} />
    </View>
  );
};

const BottomActions = ({ theme }: { theme: Theme }) => {
  const { bottom } = useSafeAreaInsets();
  const activeThemeColor = theme.mode === "dark" ? COLOR.dark : COLOR.light;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        bottom: bottom,
        paddingHorizontal: 20,
        position: "absolute",
      }}
    >
      <Pressable>
        <Text style={{ fontSize: 18, color: activeThemeColor.textColor }}>
          Skip
        </Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: activeThemeColor.switch,
          height: 40,
          width: 40,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign
          name="arrowright"
          size={24}
          color={activeThemeColor.textColor}
        />
      </Pressable>
    </View>
  );
};

export default ThemeToggleSwitch;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#e9ecef",
    width: "90%",
    height: 55,
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.6,
  },
});
