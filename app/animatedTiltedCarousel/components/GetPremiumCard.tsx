import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const _imageBorderRadius = 20;
const GetPremiumCard = () => {
  const { height, width } = useWindowDimensions();
  const _imageHeight = height * 0.2;
  const _containerHeight = height * 0.2;
  const [close, setClose] = useState(false);

  const boxHeight = useSharedValue(_containerHeight);

  const rStyle = useAnimatedStyle(() => {
    return {
      height: close ? withTiming(0, { duration: 600 }) : boxHeight.value,
      opacity: close ? withTiming(0) : 1,
      marginVertical: close ? withTiming(height * 0.01) : height * 0.03,
    };
  }, [close]);
  return (
    <View
      style={{
        paddingHorizontal: 14,
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <Animated.View style={[rStyle]}>
        <Image
          style={{
            height: "100%",
            width: "auto",
            backgroundColor: "green",
            borderRadius: _imageBorderRadius,
          }}
          //   blurRadius={3}
          resizeMode="cover"
          source={{
            uri: "https://images.wallpapersden.com/image/wxl-squid-game-hd-fan-poster_80603.jpg",
          }}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setClose(true);
          }}
          style={{
            height: 30,
            width: 30,
            position: "absolute",
            zIndex: 1,
            top: 10,
            right: 10,
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,0.3)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="close" size={20} color="white" />
        </TouchableOpacity>
        <OverlayContainer>
          <View
            style={{
              padding: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: width * 0.05,
                color: "white",
                fontFamily: "ChirpRegular",
              }}
            >
              Watch favorite movie without any ads
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                paddingVertical: 10,
                width: "70%",
                backgroundColor: "#11a325",
                alignSelf: "flex-start",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 12,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "white",
                  fontFamily: "ChirpBold",
                }}
              >
                Get premium
              </Text>
            </TouchableOpacity>
          </View>
        </OverlayContainer>
      </Animated.View>
    </View>
  );
};

export default GetPremiumCard;

const styles = StyleSheet.create({});

type OverlayContainerProps = {
  children: ReactNode;
};

const OverlayContainer = ({ children }: OverlayContainerProps) => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: "rgba(1,1,1,0.2)",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: _imageBorderRadius,
          overflow: "hidden",
        },
      ]}
    >
      <LinearGradient
        colors={[
          "rgba(164, 14, 72, 1)",
          " rgba(164, 14, 72, 0.8)",
          "rgba(164, 14, 72, 0.1)",
        ]}
        style={{
          height: "100%",
          width: "70%",
          justifyContent: "center",
        }}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};
