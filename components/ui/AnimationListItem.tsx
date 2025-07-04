import {
  Dimensions,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { AnimationListItemType, FONTS } from "@/utils/constant";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Href } from "expo-router";

interface listItemProps {
  item: AnimationListItemType;
  index: number;
  onPress: () => void;
}

const { height: _windowHeight, width: _windowWidth } = Dimensions.get("window");
const _imageHeight = _windowHeight * 0.32;
const _imageWidth = _windowWidth * 0.36;
const AnimationListItem = ({ item, index, onPress }: listItemProps) => {
  const COLOR = useThemeColor();
  return (
    <Pressable
      onPress={onPress}
      style={[styles.mainContainer, { backgroundColor: COLOR.gray }]}
    >
      <Image
        style={styles.thumbnail}
        source={item.thumbnail_url}
        contentFit="cover"
        transition={300}
      />
      <View style={styles.infoContainer}>
        <Text style={[styles.title, { color: COLOR.text }]}>{item.title}</Text>

        <View style={[styles.topicsMainContainer]}>
          {item.topics.map((item, index) => {
            return (
              <View
                style={[
                  styles.topicsContainerStyle,
                  { backgroundColor: COLOR.background },
                ]}
                key={index}
              >
                <Text
                  numberOfLines={1}
                  style={[styles.topic, { color: COLOR.text }]}
                >
                  {item}
                </Text>
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Linking.openURL(item.githubLink)}
          style={styles.buttonStyle}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "600",
            }}
          >
            See code
          </Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default AnimationListItem;

const styles = StyleSheet.create({
  mainContainer: {
    width: _windowWidth,
    marginBottom: 10,
    padding: _windowWidth * 0.04,
    backgroundColor: "rgba(1,1,1,0.05)",
    flexDirection: "row",
    gap: 10,
  },
  thumbnail: {
    height: _imageHeight,
    width: _imageWidth,
    borderRadius: 16,
  },
  buttonStyle: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#3a86ff",
    alignSelf: "flex-end",
    marginTop: "auto",
    borderRadius: 10,
  },
  title: { fontSize: 22, fontWeight: 700, letterSpacing: 0.8 },
  topic: {
    fontSize: 14,
    fontFamily: FONTS.firaCodeRegular,
    letterSpacing: 0.2,
  },
  topicsContainerStyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
  },
  topicsMainContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  infoContainer: { flex: 1, gap: 20 },
});
