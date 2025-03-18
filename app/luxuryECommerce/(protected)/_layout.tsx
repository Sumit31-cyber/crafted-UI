import { useThemeColor } from "@/hooks/useThemeColor";
import { _windowWidth } from "@/utils/constant";
import { Stack } from "expo-router";

const _iconSize = _windowWidth * 0.06;
export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="cart" />
    </Stack>
  );
}
