import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import { AnimatedScrollView } from "react-native-reanimated/lib/typescript/component/ScrollView";
import { _movieInfo, _windowWidth } from "@/utils/constant";

interface renderItemProps {
  item: {
    id: number;
    imageUrl: string;
    name: string;
    genres: string[];
  };
  index: number;
  scrollX: SharedValue<number>;
}
interface renderIndicatorProps {
  scrollX: SharedValue<number>;
  index: number;
}

const _imageBorderRadius = 14;

const _imageWidth = _windowWidth / 2;
const _imageHeight = _imageWidth * 1.5;
const _indicatorSize = 5;
const _blurContainerHeight = 80;
const ImageCarousel = () => {
  const scrollX = useSharedValue(0);
  const ref = useRef<AnimatedScrollView>(null);

  useEffect(() => {
    scrollToCenter();
  }, []);

  const scrollToCenter = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1));
    if (ref.current) {
      ref.current.scrollTo({
        x: _imageWidth * Math.round((_movieInfo.length - 1) / 2),
        y: 0,
        animated: false,
      });
    }
  };

  const handleScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x;
  });
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          paddingHorizontal: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Popular</Text>
        <Text style={{ fontSize: 12, color: "white", opacity: 0.8 }}>
          View all
        </Text>
      </View>
      <Animated.ScrollView
        ref={ref}
        onScroll={handleScroll}
        horizontal
        decelerationRate={"fast"}
        disableIntervalMomentum
        scrollEventThrottle={16}
        snapToInterval={_imageWidth}
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{
          paddingHorizontal: (_windowWidth - _imageWidth) / 2,
        }}
      >
        <View style={{ width: "100%", flexDirection: "row" }}>
          {_movieInfo.map((item, index) => {
            return (
              <RenderItem
                key={item.id}
                item={item}
                index={index}
                scrollX={scrollX}
              />
            );
          })}
        </View>
      </Animated.ScrollView>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
          gap: 3,
        }}
      >
        {_movieInfo.map((item, index) => {
          return (
            <RenderIndicatorItem key={index} scrollX={scrollX} index={index} />
          );
        })}
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({});

const RenderIndicatorItem = ({ scrollX, index }: renderIndicatorProps) => {
  const rStyle = useAnimatedStyle(() => {
    const width = interpolate(
      scrollX.value,
      [
        (index - 1) * _imageWidth, // Previous item position
        index * _imageWidth, // Current item position
        (index + 1) * _imageWidth, // Next item position
      ],
      [_indicatorSize, _indicatorSize * 4, _indicatorSize], // Scale values
      Extrapolation.CLAMP
    );

    return {
      width: width,
    };
  });

  return (
    <Animated.View
      style={[
        rStyle,
        {
          height: _indicatorSize,
          backgroundColor: "#11a325",
          borderRadius: 100,
        },
      ]}
    ></Animated.View>
  );
};

const RenderItem = ({ item, index, scrollX }: renderItemProps) => {
  const prev = (index - 1) * _imageWidth;
  const curr = index * _imageWidth;
  const next = (index + 1) * _imageWidth;

  const input = [prev, curr, next];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      input,
      [0.8, 1, 0.8] // Scale values
    );
    const z = interpolate(
      scrollX.value,
      input,
      [-1, 1, -1],
      Extrapolation.CLAMP // Scale values
    );

    const rotateX = interpolate(
      scrollX.value,
      input,
      [20, 0, -20] // Scale values
    );
    const opacity = interpolate(
      scrollX.value,
      input,
      [0.6, 1, 0.6] // Scale values
    );
    return {
      transform: [{ scale }, { rotate: `${rotateX}deg` }],
      zIndex: Math.round(z),
      opacity,
    };
  });
  const rBlurStyle = useAnimatedStyle(() => {
    const bottom = interpolate(
      scrollX.value,
      input,
      [-100, 0, -100],
      Extrapolation.CLAMP // Scale values
    );
    const opacity = interpolate(
      scrollX.value,
      input,
      [0, 1, 0],
      Extrapolation.CLAMP // Scale values
    );
    return {
      bottom,
      opacity,
    };
  });
  return (
    <Animated.View
      style={[
        rStyle,
        {
          height: _imageHeight,
          width: _imageWidth,
          borderRadius: _imageBorderRadius,
          overflow: "hidden",
        },
      ]}
    >
      <Image
        style={{ height: "100%", width: "100%" }}
        source={{ uri: item.imageUrl }}
        transition={300}
      />
      <Animated.View
        style={[
          rBlurStyle,
          {
            height: _blurContainerHeight,
            width: "100%",
            position: "absolute",
          },
        ]}
      >
        <BlurView
          intensity={20}
          style={{
            height: _blurContainerHeight,
            width: "100%",
            paddingHorizontal: 10,
            justifyContent: "center",
            gap: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: _windowWidth * 0.045,
                color: "white",
                fontWeight: "700",
                letterSpacing: 0.6,
              }}
            >
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: _windowWidth * 0.03,
                  color: "white",
                  fontWeight: "500",
                  letterSpacing: 0.6,
                }}
              >
                7.5
              </Text>
              <AntDesign name="star" size={20} color="#fed500" />
            </View>
          </View>
          <View style={{ flexDirection: "row", gap: 5 }}>
            {item.genres.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    backgroundColor: "#3356ff",
                    paddingVertical: 5,
                    paddingHorizontal: 8,
                    borderRadius: 100,
                  }}
                >
                  <Text
                    style={{
                      fontSize: _windowWidth * 0.03,
                      color: "white",
                      fontWeight: "500",
                      letterSpacing: 0.6,
                    }}
                  >
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
        </BlurView>
      </Animated.View>
    </Animated.View>
  );
};
