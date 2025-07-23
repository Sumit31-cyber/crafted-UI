import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import Animated, {
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

interface MovieItem {
  id: number;
  imageUrl: string;
  name: string;
  genres: string[];
}

interface RenderItemProps {
  item: MovieItem;
  index: number;
  scrollX: SharedValue<number>;
}

interface RenderIndicatorProps {
  scrollX: SharedValue<number>;
  index: number;
}

// Constants
const IMAGE_BORDER_RADIUS = 14;
const IMAGE_WIDTH = _windowWidth / 2;
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.5;
const INDICATOR_SIZE = 5;
const BLUR_CONTAINER_HEIGHT = IMAGE_HEIGHT * 0.25;

const ImageCarousel: React.FC = () => {
  const scrollX = useSharedValue(0);
  const ref = useRef<AnimatedScrollView>(null);

  useEffect(() => {
    scrollToCenter();
  }, []);

  const scrollToCenter = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 1));
    if (ref.current) {
      ref.current.scrollTo({
        x: IMAGE_WIDTH * Math.round((_movieInfo.length - 1) / 2),
        y: 0,
        animated: false,
      });
    }
  };

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular</Text>
        <Text style={styles.viewAllText}>View all</Text>
      </View>

      <Animated.ScrollView
        ref={ref}
        onScroll={handleScroll}
        horizontal
        decelerationRate="fast"
        disableIntervalMomentum
        scrollEventThrottle={16}
        snapToInterval={IMAGE_WIDTH}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.itemsContainer}>
          {_movieInfo.map((item, index) => (
            <RenderItem
              key={item.id}
              item={item}
              index={index}
              scrollX={scrollX}
            />
          ))}
        </View>
      </Animated.ScrollView>

      <View style={styles.indicatorContainer}>
        {_movieInfo.map((_, index) => (
          <RenderIndicatorItem key={index} scrollX={scrollX} index={index} />
        ))}
      </View>
    </View>
  );
};

const RenderIndicatorItem: React.FC<RenderIndicatorProps> = ({
  scrollX,
  index,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(
      scrollX.value,
      [
        (index - 1) * IMAGE_WIDTH,
        index * IMAGE_WIDTH,
        (index + 1) * IMAGE_WIDTH,
      ],
      [INDICATOR_SIZE, INDICATOR_SIZE * 4, INDICATOR_SIZE],
      Extrapolation.CLAMP
    );

    return { width };
  });

  return <Animated.View style={[styles.indicator, animatedStyle]} />;
};

const RenderItem: React.FC<RenderItemProps> = ({ item, index, scrollX }) => {
  const previousPosition = (index - 1) * IMAGE_WIDTH;
  const currentPosition = index * IMAGE_WIDTH;
  const nextPosition = (index + 1) * IMAGE_WIDTH;
  const inputRange = [previousPosition, currentPosition, nextPosition];

  const itemAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollX.value, inputRange, [0.8, 1, 0.8]);

    const zIndex = interpolate(
      scrollX.value,
      inputRange,
      [-1, 1, -1],
      Extrapolation.CLAMP
    );

    const rotateX = interpolate(scrollX.value, inputRange, [20, 0, -20]);

    const opacity = interpolate(scrollX.value, inputRange, [0.6, 1, 0.6]);

    return {
      transform: [{ scale }, { rotate: `${rotateX}deg` }],
      zIndex: Math.round(zIndex),
      opacity,
    };
  });

  const blurAnimatedStyle = useAnimatedStyle(() => {
    const bottom = interpolate(
      scrollX.value,
      inputRange,
      [-100, 0, -100],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP
    );

    return { bottom, opacity };
  });

  return (
    <Animated.View style={[styles.imageContainer, itemAnimatedStyle]}>
      <Image
        style={styles.image}
        source={{ uri: item.imageUrl }}
        transition={300}
      />

      <Animated.View style={[styles.blurContainer, blurAnimatedStyle]}>
        <BlurView intensity={20} style={styles.blurView}>
          <View style={styles.movieInfoRow}>
            <Text style={styles.movieTitle}>{item.name}</Text>

            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>7.5</Text>
              <AntDesign name="star" size={20} color="#fed500" />
            </View>
          </View>

          <View style={styles.genresContainer}>
            {item.genres.map((genre, genreIndex) => (
              <View key={genreIndex} style={styles.genreTag}>
                <Text style={styles.genreText}>{genre}</Text>
              </View>
            ))}
          </View>
        </BlurView>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
  },
  viewAllText: {
    fontSize: 12,
    color: "white",
    opacity: 0.8,
  },
  scrollView: {
    flexGrow: 0,
  },
  scrollViewContent: {
    paddingHorizontal: (_windowWidth - IMAGE_WIDTH) / 2,
  },
  itemsContainer: {
    width: "100%",
    flexDirection: "row",
  },
  indicatorContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    gap: 3,
  },
  indicator: {
    height: INDICATOR_SIZE,
    backgroundColor: "#11a325",
    borderRadius: 100,
  },
  imageContainer: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    borderRadius: IMAGE_BORDER_RADIUS,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  blurContainer: {
    height: BLUR_CONTAINER_HEIGHT,
    width: "100%",
    position: "absolute",
  },
  blurView: {
    height: BLUR_CONTAINER_HEIGHT,
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    gap: 8,
  },
  movieInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  movieTitle: {
    fontSize: _windowWidth * 0.045,
    color: "white",
    fontWeight: "700",
    letterSpacing: 0.6,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    fontSize: _windowWidth * 0.03,
    color: "white",
    fontWeight: "500",
    letterSpacing: 0.6,
  },
  genresContainer: {
    flexDirection: "row",
    gap: 5,
  },
  genreTag: {
    backgroundColor: "#3356ff",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 100,
  },
  genreText: {
    fontSize: _windowWidth * 0.03,
    color: "white",
    fontWeight: "500",
    letterSpacing: 0.6,
  },
});

export default ImageCarousel;
