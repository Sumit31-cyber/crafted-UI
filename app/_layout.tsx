import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const COLOR = useThemeColor();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    FiraCodeBold: require("../assets/fonts/FiraCode-Bold.ttf"),
    FiraCodeRegular: require("../assets/fonts/FiraCode-Regular.ttf"),
    FiraCodeMedium: require("../assets/fonts/FiraCode-Medium.ttf"),
    FiraCodeSemiBold: require("../assets/fonts/FiraCode-SemiBold.ttf"),
    FiraCodeSemiLight: require("../assets/fonts/FiraCode-Light.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Crafts",
            headerSearchBarOptions: {
              placeholder: "Search",
              onChangeText: (change) => {
                const { nativeEvent } = change;
                const { text } = nativeEvent;
                console.log(text);
              },
            },
            headerLargeTitle: true,
            headerBlurEffect: "regular",
            headerTransparent: true,
            headerTitleStyle: {
              fontFamily: "FiraCodeBold",
            },
            headerLargeTitleStyle: {
              fontFamily: "FiraCodeBold",
            },
          }}
        />
        <Stack.Screen name="homeScreen/index" />
        <Stack.Screen
          name="animatedTiltedCarousel/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="animatedScaledCarousel/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="luxuryECommerce" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
