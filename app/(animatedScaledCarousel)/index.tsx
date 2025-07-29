import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  _wallpapers,
  _windowHeight,
  _windowWidth,
  WallpaperType,
} from "@/utils/constant";
import { Image } from "expo-image";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const _imageWidth = _windowWidth * 0.7;
const _imageHeight = _windowHeight * 0.52;
const _spacing = _windowWidth * 0.035;
const Page = () => {
  const COLOR = useThemeColor();
  const scrollX = useSharedValue(0);
  // const AnimatedImage = Animated.createAnimatedComponent(Image);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollX.value = e.contentOffset.x / (_imageWidth + _spacing);
  });

  const ImageItem = ({
    item,
    index,
  }: {
    item: WallpaperType;
    index: number;
  }) => {
    const rStyle = useAnimatedStyle(() => {
      return {
        transform: [
          {
            scale: interpolate(
              scrollX.value,
              [index - 1, index, index + 1],
              [1.4, 1, 1.4]
            ),
          },
          {
            rotate: `${interpolate(
              scrollX.value,
              [index - 1, index, index + 1],
              [10, 0, -10]
            )}deg`,
          },
        ],
      };
    });

    return (
      <View
        style={{
          height: _imageHeight,
          width: _imageWidth,
          overflow: "hidden",
          borderRadius: 10,
        }}
      >
        <Animated.Image
          source={{ uri: item.image_url }}
          style={[rStyle, { flex: 1 }]}
        />
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLOR.background,
      }}
    >
      <View style={StyleSheet.absoluteFill}>
        {_wallpapers.map((item, index) => {
          return (
            <BackdropImage
              key={index}
              item={item}
              index={index}
              scrollX={scrollX}
            />
          );
        })}
      </View>
      <Animated.FlatList
        onScroll={onScroll}
        data={_wallpapers}
        horizontal
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        scrollEventThrottle={1000 / 60}
        decelerationRate={"fast"}
        snapToInterval={_imageWidth + _spacing}
        contentContainerStyle={{
          gap: _spacing,
          paddingHorizontal: (_windowWidth - _imageWidth) / 2,
        }}
        style={{ flexGrow: 0 }}
        renderItem={({ item, index }) => {
          return <ImageItem key={item.id} index={index} item={item} />;
        }}
      />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});

const BackdropImage = ({
  item,
  index,
  scrollX,
}: {
  item: WallpaperType;
  index: number;
  scrollX: SharedValue<number>;
}) => {
  const backdropStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [index - 1, index, index + 1],
        [0, 1, 0]
      ),
    };
  });

  return (
    <Animated.Image
      key={index}
      blurRadius={50}
      style={[
        backdropStyle,
        StyleSheet.absoluteFill,
        {
          flex: 1,
        },
      ]}
      source={{ uri: item.image_url }}
    />
  );
};
