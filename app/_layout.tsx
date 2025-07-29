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
import { useThemeColor } from "@/hooks/useThemeColor";

// Prevent splash screen from auto-hiding before fonts are loaded
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
    TNRBoldItalics: require("../assets/fonts/TNRBoldItalics.ttf"),
    TNRItalics: require("../assets/fonts/TNRItalics.ttf"),
    TNR: require("../assets/fonts/TNR.ttf"),
    TNRBold: require("../assets/fonts/TNRBold.ttf"),
    poppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    poppinsSemibold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Home screen with custom header */}
        <Stack.Screen
          name="index"
          options={{
            title: "Crafts",
            headerSearchBarOptions: {
              placeholder: "Search",
              onChangeText: ({ nativeEvent }) => {
                console.log(nativeEvent.text);
              },
            },
            headerLargeTitle: true,
            headerTransparent: true,
            headerBlurEffect: "regular",
            headerTitleStyle: {
              fontFamily: "FiraCodeBold",
            },
            headerLargeTitleStyle: {
              fontFamily: "FiraCodeBold",
            },
          }}
        />

        <Stack.Screen name="homeScreen" />
        <Stack.Screen
          name="(animatedTiltedCarousel)/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(animatedScaledCarousel)/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(themeToggleSwitch)/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(luxuryECommerce)"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="stickyActionBar" options={{ headerShown: false }} />
        <Stack.Screen
          name="(circularCarousel)/index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(onboardingSpotlight)/index"
          options={{ headerShown: false }}
        />
        {/* Not found screen */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
