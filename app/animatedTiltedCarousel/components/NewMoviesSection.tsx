import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Animated, { SharedValue } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { _movieInfo } from "../utils";
import { Image } from "expo-image";

interface cardItemProps {
  item: {
    id: number;
    imageUrl: string;
    name: string;
    genres: string[];
  };
  index: number;
}

const _imageBorderRadius = 14;
const { height, width } = Dimensions.get("window");
const _gap = 15;
const _imageWidth = width / 2.25;
const _imageHeight = _imageWidth * 1.5;
const _blurContainerHeight = 80;

const NewMoviesSection = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          paddingHorizontal: 20,
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>New</Text>
        <Text style={{ fontSize: 12, color: "white", opacity: 0.8 }}>
          View all
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: _gap,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {_movieInfo.map((item, index) => {
          return <Card key={index} item={item} index={index} />;
        })}
      </View>
    </>
  );
};

export default NewMoviesSection;

const styles = StyleSheet.create({});

const Card = ({ item, index }: cardItemProps) => {
  return (
    <Pressable
      style={[
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

      <View
        style={[
          {
            height: _blurContainerHeight,
            width: "100%",
            position: "absolute",
            bottom: 0,
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
                fontSize: width * 0.045,
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
                  fontSize: width * 0.03,
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
                      fontSize: width * 0.03,
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
      </View>
    </Pressable>
  );
};
