import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import BlurBackdrop from "@/components/ui/BlurBackdrop";
import useCustomHeader from "@/customHooks/LuxuryECommernceHooks/useCustomHeader";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import {
  _horizontalPadding,
  _windowWidth,
  FONTS,
  FontSizes,
  LuxuryColors,
} from "@/utils/constant";
import { Image } from "expo-image";
import { BlurView } from "expo-blur";
import CreditCard from "@/components/ui/LuxuryECommerce/CreditCard";
import { BoxIcon } from "@/assets/svgs/luxuryECommSvgs/svgs";

const _imageSize = _windowWidth * 0.3;
const _borderRadius = 14;
const Account = () => {
  const { Header, headerHeight } = useCustomHeader();
  return (
    <View style={{ flex: 1 }}>
      <BlurBackdrop />
      <Header
        icon={<SimpleLineIcons name="handbag" size={18} color="black" />}
        onPress={() => {}}
        title="Make the most of the app"
      />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            paddingTop: headerHeight + 30,
            paddingHorizontal: _horizontalPadding,
            gap: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: 14,
              flexDirection: "row",
              padding: 10,
              gap: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.1,
              shadowRadius: 7.49,

              elevation: 6,
            }}
          >
            <View
              style={{
                height: _imageSize,
                aspectRatio: 1,
                backgroundColor: "red",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1742558701206-55aa0c21cc8b?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={{ flex: 1 }}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: FONTS.poppinsMedium,
                  fontSize: FontSizes.large,
                }}
              >
                User Name
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.poppinsRegular,
                  fontSize: FontSizes.medium,
                  color: LuxuryColors.gray,
                }}
              >
                someone@example.com
              </Text>
              <View
                style={{
                  backgroundColor: "#31a041",
                  alignSelf: "flex-start",
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: FONTS.poppinsRegular,
                    fontSize: FontSizes.small,
                    color: "white",
                  }}
                >
                  30 Points
                </Text>
              </View>
            </View>
          </View>

          <CreditCard />
          <View style={{}}>
            <Text
              style={{
                fontSize: FontSizes.xLarge,
                fontFamily: FONTS.poppinsRegular,
              }}
            >
              My Orders
            </Text>
            <View style={{ gap: 15, marginVertical: 10 }}>
              <Tiles
                icon={<BoxIcon tint="#5fadf5" />}
                title="All Orders"
                onPress={() => {}}
              />
              <Tiles
                icon={<Entypo name="cycle" size={30} color="#9a4dff" />}
                title="Processing"
                onPress={() => {}}
              />
              <Tiles
                icon={
                  <MaterialCommunityIcons
                    name="truck-outline"
                    size={30}
                    color="#31a042"
                  />
                }
                title="Shipped"
                onPress={() => {}}
              />
              <Tiles
                icon={<AntDesign name="back" size={30} color="#ea4b50" />}
                title="Returns"
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});

type TileProps = {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
};
const Tiles = ({ icon, title, onPress }: TileProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 18,
        borderRadius: _borderRadius,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7.49,

        elevation: 6,
      }}
    >
      <View
        style={{
          height: 40,
          width: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </View>
      <Text
        style={{
          fontFamily: FONTS.poppinsMedium,
          fontSize: FontSizes.medium,
          marginLeft: 10,
          color: LuxuryColors.liteBlack,
        }}
      >
        {title}
      </Text>
      <AntDesign
        style={{ marginLeft: "auto" }}
        name="right"
        size={20}
        color={LuxuryColors.liteBlack}
      />
    </TouchableOpacity>
  );
};
