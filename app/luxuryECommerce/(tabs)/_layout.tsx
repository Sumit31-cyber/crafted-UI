import {
  BagIcon,
  GraphIcon,
  HomeIcon,
  StarIcon,
  UserIcon,
} from "@/assets/svgs/luxuryECommSvgs/svgs";
import { useThemeColor } from "@/hooks/useThemeColor";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Dimensions } from "react-native";

const { height: _windowHeight, width: _windowWidth } = Dimensions.get("window");
const _iconSize = _windowWidth * 0.06;
export default function TabLayout() {
  const { text } = useThemeColor();
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: text, headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon size={_iconSize} tint={color} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: ({ color }) => <BagIcon size={_iconSize} tint={color} />,
        }}
      />
      <Tabs.Screen
        name="designer"
        options={{
          title: "Designer",
          tabBarIcon: ({ color }) => (
            <GraphIcon size={_iconSize} tint={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorite",
          tabBarIcon: ({ color }) => <StarIcon size={_iconSize} tint={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <UserIcon size={_iconSize} tint={color} />,
        }}
      />
    </Tabs>
  );
}
