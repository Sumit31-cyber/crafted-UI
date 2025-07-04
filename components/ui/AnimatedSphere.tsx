import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Mask,
} from "@shopify/react-native-skia";
import {
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const RADIUS = 80;
const AnimatedSphere = ({ theme }: { theme: string }) => {
  const gradientColor1 = useSharedValue("#ff4467");
  const gradientColor2 = useSharedValue("#ff8e0b");
  const cy = useSharedValue(0);
  const mask = useSharedValue(0);

  useEffect(() => {
    if (theme == "light") {
      cy.value = withTiming(0);
      mask.value = withTiming(0);
      gradientColor1.value = withTiming("#ff4467");
      gradientColor2.value = withTiming("#ff8e0b");
    } else {
      cy.value = withSpring(RADIUS / 2, { duration: 2000 });
      mask.value = withSpring(RADIUS, { duration: 2000 });
      gradientColor1.value = withTiming("#8372ff");
      gradientColor2.value = withTiming("#86bfff");
    }
  }, [gradientColor1, gradientColor2, theme]);

  const color = useDerivedValue(() => {
    return [gradientColor1.value, gradientColor2.value];
  });
  return (
    <Canvas
      style={{
        height: RADIUS * 2.2,
        width: RADIUS * 2.2,
        transform: [{ rotate: "45deg" }],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Mask
        mode="luminance"
        mask={
          <Group>
            <Circle cx={RADIUS} cy={RADIUS} r={RADIUS} color={"white"} />
            <Circle cx={RADIUS} cy={cy} r={mask} color={"black"} />
          </Group>
        }
      >
        <Circle cx={RADIUS} cy={RADIUS} r={RADIUS} />
        <LinearGradient
          colors={color}
          transform={[{ rotate: 45 }]}
          origin={{ x: RADIUS, y: RADIUS }}
          start={{ x: 0, y: 0 }}
          end={{ x: RADIUS * 2, y: RADIUS * 2 }}
        />
      </Mask>
    </Canvas>
  );
};

export default AnimatedSphere;

const styles = StyleSheet.create({});
