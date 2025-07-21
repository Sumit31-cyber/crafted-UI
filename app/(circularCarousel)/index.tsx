import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft } from "lucide-react-native";
import {
  _horizontalPadding,
  _windowHeight,
  _windowWidth,
  FONTS,
} from "@/utils/constant";
import { Image, ImageProps } from "expo-image";
import { router } from "expo-router";

const CARD_HEIGHT = _windowHeight / 5;
const CARD_WIDTH = _windowWidth * 0.7;
const CARD_BORDER_RADIUS = 20;
const SPOTIFY_GREEN = "#1FD860";
const SHADOW_CONFIG = {
  shadowColor: SPOTIFY_GREEN,
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.3,
  shadowRadius: 20,
};

interface Artist {
  id: number;
  artistName: string;
  image: ImageProps["source"];
  liteColor: string;
  darkColor: string;
}

interface CardProps {
  item: Artist;
  index: number;
  scrollY: SharedValue<number>;
}

interface BlurLinearGradientProps {
  children: React.ReactNode;
  style: ViewStyle;
  inverted?: boolean;
}

interface PositionIndicatorsProps {
  scrollY: SharedValue<number>;
}

interface IndicatorProps {
  item: { id: number };
  scrollY: SharedValue<number>;
  index: number;
}

const createGradientColors = (inverted: boolean) => {
  const baseGradient = [
    "rgba(0,0,0,1)",
    "rgba(0,0,0,0.9)",
    "rgba(0,0,0,0.8)",
    "rgba(0,0,0,0.7)",
    "transparent",
  ];
  return inverted ? [...baseGradient].reverse() : baseGradient;
};

const createAnimationInputRange = (index: number) => {
  "worklet";
  return [
    (index - 2) * CARD_HEIGHT,
    (index - 1) * CARD_HEIGHT,
    index * CARD_HEIGHT,
    (index + 1) * CARD_HEIGHT,
    (index + 2) * CARD_HEIGHT,
  ];
};

const createIndicatorInputRange = (index: number) => {
  "worklet";
  return [
    (index - 2) * CARD_HEIGHT,
    (index - 1) * CARD_HEIGHT,
    index * CARD_HEIGHT,
    (index + 1) * CARD_HEIGHT,
    (index + 3) * CARD_HEIGHT,
  ];
};

const Header: React.FC<{ top: number }> = ({ top }) => (
  <View style={styles.headerContainer}>
    <View style={[styles.headerRow, { paddingTop: top }]}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <ArrowLeft color="white" />
      </Pressable>

      <View style={styles.headerTitle}>
        <Text style={textStyles.headerTitle}>
          Connection - <Text style={textStyles.headerSubtitle}>2 of 3</Text>
        </Text>
      </View>

      <View style={styles.skipButton}>
        <Text style={textStyles.skipButtonText}>Skip</Text>
      </View>
    </View>

    <View>
      <Text style={textStyles.mainTitle}>Connect Your</Text>

      <View style={styles.titleContainer}>
        <View style={SHADOW_CONFIG}>
          <Image
            source={require("../../assets/images/spotify-png-icon.png")}
            style={styles.spotifyIcon}
          />
        </View>
        <Text style={textStyles.mainTitle}>Spotify</Text>
      </View>

      <Text style={textStyles.description}>
        Link Spotify to track favorite artists and get concert recommendation
        tailored to your listening
      </Text>
    </View>
  </View>
);

const ConnectButton: React.FC<{ bottom: number }> = ({ bottom }) => (
  <View style={[styles.connectButton, { marginBottom: bottom }]}>
    <View style={SHADOW_CONFIG}>
      <Image
        source={require("../../assets/images/spotify-png-icon.png")}
        style={styles.connectButtonIcon}
      />
    </View>
    <Text style={textStyles.connectButtonText}>Connect Spotify</Text>
  </View>
);

const RenderCard: React.FC<CardProps> = ({ index, item, scrollY }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = createAnimationInputRange(index);

    const translateX = interpolate(
      scrollY.value,
      inputRange,
      [-30, 30, 60, 30, -30],
      Extrapolation.CLAMP
    );

    const rotate = interpolate(
      scrollY.value,
      inputRange,
      [30, 15, 0, -15, -30],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      scrollY.value,
      inputRange,
      [0.3, 0.8, 1, 0.8, 0.3],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        { translateX },
        { translateY: CARD_HEIGHT / 2 + CARD_HEIGHT * 1.5 },
        { rotate: `${rotate}deg` },
      ],
      opacity,
    };
  }, []);

  return (
    <Animated.View style={[animatedStyle, styles.card]}>
      <View style={[styles.cardContent, { backgroundColor: item.liteColor }]}>
        <Text
          numberOfLines={2}
          style={[styles.artistName, { color: item.darkColor }]}
        >
          {item.artistName}
        </Text>

        <View style={styles.artistImageContainer}>
          <Image
            transition={300}
            style={styles.artistImage}
            source={item.image}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const BlurLinearGradient: React.FC<BlurLinearGradientProps> = ({
  children,
  style,
  inverted = false,
}) => {
  const gradientColors = createGradientColors(inverted);

  return (
    <View style={style}>
      <LinearGradient
        //@ts-ignore
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const Indicator: React.FC<IndicatorProps> = ({ item, scrollY, index }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = createIndicatorInputRange(index);

    const width = interpolate(
      scrollY.value,
      inputRange,
      [8, 12, 20, 12, 8],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      scrollY.value,
      inputRange,
      [0.5, 0.7, 1, 0.7, 0.5],
      Extrapolation.CLAMP
    );

    return { width, opacity };
  }, []);

  return (
    <Animated.View key={item.id} style={[animatedStyle, styles.indicator]} />
  );
};

const PositionIndicators: React.FC<PositionIndicatorsProps> = ({ scrollY }) => (
  <View style={styles.indicatorsContainer}>
    {ARTISTS.map((_, index) => (
      <Indicator
        key={index}
        item={{ id: index }}
        scrollY={scrollY}
        index={index}
      />
    ))}
  </View>
);

// Main component
const CircularStackCarousel: React.FC = () => {
  const scrollY = useSharedValue(0);
  const { top, bottom } = useSafeAreaInsets();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => (scrollY.value = e.contentOffset.y),
  });

  return (
    <View style={[styles.container, { marginBottom: bottom }]}>
      <StatusBar animated style="light" />

      <BlurLinearGradient
        style={{
          height: _windowHeight * 0.4,
          width: _windowWidth,
          position: "absolute",
          zIndex: 1,
          top: 0,
        }}
      >
        <Header top={top} />
      </BlurLinearGradient>

      <Animated.FlatList
        data={ARTISTS}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        decelerationRate="fast"
        contentContainerStyle={{ paddingBottom: CARD_HEIGHT * 4 }}
        snapToInterval={CARD_HEIGHT}
        renderItem={({ item, index }) => (
          <RenderCard item={item} index={index} scrollY={scrollY} />
        )}
      />

      {/* Bottom gradient with connect button */}
      <BlurLinearGradient
        inverted
        style={{
          height: _windowHeight * 0.15,
          width: _windowWidth,
          position: "absolute",
          zIndex: 1,
          bottom: 0,
        }}
      >
        <ConnectButton bottom={bottom} />
      </BlurLinearGradient>

      {/* Position indicators */}
      <View style={styles.positionContainer}>
        <PositionIndicators scrollY={scrollY} />
      </View>
    </View>
  );
};

export default CircularStackCarousel;

// Sample data
const ARTISTS: Artist[] = [
  {
    id: 0,
    artistName: "Arijit Singh",
    image: require("../../assets/images/spotifyArtist/arijit.jpeg"),
    liteColor: "#f4d58d",
    darkColor: "#c96416",
  },
  {
    id: 1,
    artistName: "Anirudh Ravichander",
    image: require("../../assets/images/spotifyArtist/anirudh.jpeg"),
    liteColor: "#83c5be",
    darkColor: "#31706e",
  },
  {
    id: 2,
    artistName: "Anuv Jain",
    image: require("../../assets/images/spotifyArtist/anuv.jpeg"),
    liteColor: "#ff5a57",
    darkColor: "#bf0603",
  },
  {
    id: 3,
    artistName: "Amit Trivedi",
    image: require("../../assets/images/spotifyArtist/amit.jpeg"),
    liteColor: "#a6c88e",
    darkColor: "#4f763a",
  },
  {
    id: 4,
    artistName: "Badshah",
    image: require("../../assets/images/spotifyArtist/badshah.jpeg"),
    liteColor: "#f4aa7d",
    darkColor: "#b73117",
  },
  {
    id: 5,
    artistName: "Yo Yo Honey Singh",
    image: require("../../assets/images/spotifyArtist/honey.jpeg"),
    liteColor: "#f4d58d",
    darkColor: "#c96416",
  },
  {
    id: 6,
    artistName: "Pritam",
    image: require("../../assets/images/spotifyArtist/pritam.jpeg"),
    liteColor: "#83c5be",
    darkColor: "#31706e",
  },
  {
    id: 7,
    artistName: "Sachet Tandon",
    image: require("../../assets/images/spotifyArtist/sachet.jpeg"),
    liteColor: "#ff5a57",
    darkColor: "#bf0603",
  },
  {
    id: 8,
    artistName: "Subh",
    image: require("../../assets/images/spotifyArtist/subh.jpeg"),
    liteColor: "#a6c88e",
    darkColor: "#4f763a",
  },
];

// Styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: CARD_HEIGHT * 5,
    backgroundColor: "black",
  },
  headerContainer: {
    paddingHorizontal: _horizontalPadding,
    gap: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    flex: 0.2,
    paddingVertical: 4,
  },
  headerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  skipButton: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    backgroundColor: "#212529",
    borderRadius: 100,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  spotifyIcon: {
    height: 40,
    width: 40,
  },
  connectButton: {
    height: _windowHeight * 0.06,
    width: _windowWidth * 0.8,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: "auto",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  connectButtonIcon: {
    height: 30,
    width: 30,
  },
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    borderRadius: CARD_BORDER_RADIUS,
    height: CARD_HEIGHT * 0.6,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  artistName: {
    flex: 1,
    fontFamily: FONTS.poppinsBold,
    fontSize: 20,
    paddingLeft: 10,
  },
  artistImageContainer: {
    height: "100%",
    width: "35%",
    borderRadius: CARD_BORDER_RADIUS,
    overflow: "hidden",
  },
  artistImage: {
    flex: 1,
  },
  indicatorsContainer: {
    gap: 8,
    alignItems: "flex-end",
  },
  indicator: {
    height: StyleSheet.hairlineWidth * 2,
    backgroundColor: "white",
  },
  positionContainer: {
    position: "absolute",
    right: 0,
  },
});

// Text styles
const textStyles = {
  headerTitle: {
    fontSize: 14,
    color: "white",
    fontFamily: FONTS.poppinsRegular,
  },
  headerSubtitle: {
    fontSize: 12,
    color: "white",
    opacity: 0.8,
  },
  skipButtonText: {
    fontSize: 12,
    color: "white",
    fontFamily: FONTS.poppinsRegular,
  },
  mainTitle: {
    color: "white",
    fontSize: 30,
    fontFamily: FONTS.poppinsBold,
  },
  description: {
    color: "white",
    fontSize: 12,
    fontFamily: FONTS.poppinsRegular,
    marginTop: 14,
    opacity: 0.7,
  },
  connectButtonText: {
    color: SPOTIFY_GREEN,
    fontSize: 14,
    fontFamily: FONTS.poppinsBold,
  },
};
