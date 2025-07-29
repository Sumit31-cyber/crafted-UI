import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import BlurBackdrop from "@/components/ui/BlurBackdrop";
import { useLocalSearchParams } from "expo-router";
import { CartType, ProductType } from "@/constants/types";
import {
  _fakeUsers,
  _horizontalPadding,
  _windowHeight,
  _windowWidth,
  FONTS,
  FontSizes,
  LuxuryColors,
  productList,
} from "@/utils/constant";
import CustomHeader from "@/components/ui/LuxuryECommerce/CustomHeader";
import { Image } from "expo-image";
import useCustomHeader from "@/customHooks/LuxuryECommernceHooks/useCustomHeader";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/LuxuryECommerceRedux/slice/cartSlice";
import { BlurView } from "expo-blur";

const _padding = 12;
const sizeList = ["S", "M", "L", "XL"];
const _imageHeight = _windowHeight * 0.58;
const _imagePreviewContainerHeight = _windowWidth * 0.22;

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const productDetail = useMemo(() => {
    const response = productList.find((item) => item.id == Number(id));
    return response;
  }, []);
  const [itemsCount, setItemsCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const dispatch = useDispatch();
  const { Header } = useCustomHeader();
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleItemsCount = useCallback(
    (type: string) => {
      if (type === "increase") {
        setItemsCount((prev) => prev + 1);
      } else if (type === "decrease") {
        if (itemsCount > 1) {
          setItemsCount((prev) => prev - 1);
        }
      }
    },
    [itemsCount]
  );

  const handleAddItemToCart = () => {
    const finalItem = {
      ...productDetail,
      cartItemCount: itemsCount,
    } as CartType;
    dispatch(addItemToCart(finalItem));
  };

  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y;
  });

  const rStyle = useAnimatedStyle(() => {
    const translate = interpolate(
      scrollY.value,
      [-_imageHeight, 0, _imageHeight],
      [-_imageHeight / 2, 0, _imageHeight * 0.75]
    );
    return {
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            [-_imageHeight, 0, _imageHeight],
            [2, 1, 1]
          ),
        },
        { translateY: translate },
      ],
    };
  });

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header
        icon={<Entypo name="dots-three-vertical" size={16} color="black" />}
        onPress={() => {}}
        title=""
        isBackButtonVisible={true}
        blurIntensity={0}
        leftButtonStyle={{
          backgroundColor: "white",
          borderColor: LuxuryColors.liteGray,
        }}
        rightButtonStyle={{
          backgroundColor: "white",
          borderColor: LuxuryColors.liteGray,
        }}
      />
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
        // bounces={false}
      >
        <Animated.View style={rStyle}>
          <Image
            contentFit={"cover"}
            style={[{ height: _imageHeight, width: "100%" }]}
            source={{ uri: productDetail?.images[mainImageIndex] }}
          />
        </Animated.View>
        <View
          style={{
            height: _imagePreviewContainerHeight,
            width: _windowWidth,
            transform: [{ translateY: -_imagePreviewContainerHeight / 2 }],
            marginBottom: 10,
          }}
        >
          <View
            style={{
              height: _imagePreviewContainerHeight,
              width: "90%",
              alignSelf: "center",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <BlurView
              intensity={100}
              style={{
                flex: 1,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12,
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    alignItems: "center",
                    paddingHorizontal: 10,
                  }}
                >
                  {productDetail?.images.map((item, index) => {
                    return (
                      <TouchableOpacity
                        key={item}
                        activeOpacity={0.8}
                        onPress={() => {
                          setMainImageIndex(index);
                        }}
                        style={{
                          width: _imagePreviewContainerHeight * 0.9,
                          aspectRatio: 1,
                          borderRadius: 10,
                          overflow: "hidden",
                        }}
                      >
                        <Image source={{ uri: item }} style={{ flex: 1 }} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </BlurView>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: _horizontalPadding,
            paddingTop: 10,
            backgroundColor: "white",
            transform: [{ translateY: -_imagePreviewContainerHeight / 2 }],
          }}
        >
          {/* <BlurBackdrop style={{ backgroundColor: "white" }} /> */}
          <View style={{ height: "auto" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ fontFamily: FONTS.TNR, fontSize: FontSizes.large }}
              >
                Size
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  height: 40,
                  padding: 5,
                  borderRadius: 100,
                  alignItems: "center",
                  backgroundColor: "white",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    handleItemsCount("increase");
                  }}
                  style={{
                    height: "100%",
                    aspectRatio: 1,
                    // height: "100%",
                    // aspectRatio: 1,
                    backgroundColor: LuxuryColors.brandColor,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="plus" size={13} color="white" />
                </TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 30,
                    marginHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: FontSizes.medium,
                      fontFamily: FONTS.poppinsRegular,
                    }}
                  >
                    {itemsCount}
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    handleItemsCount("decrease");
                  }}
                  style={{
                    height: "100%",
                    aspectRatio: 1,
                    backgroundColor: "white",
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: StyleSheet.hairlineWidth * 2,
                    borderColor: LuxuryColors.brandColor,
                  }}
                >
                  <AntDesign name="minus" size={13} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              {sizeList.map((item, index) => {
                return (
                  <View
                    key={item}
                    style={{
                      width: (_windowWidth - _padding * 2) / sizeList.length,
                      padding: 10,
                    }}
                  >
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => {
                        setSelectedSize(item);
                      }}
                      style={{
                        height: "auto",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: StyleSheet.hairlineWidth * 2,
                        borderColor: LuxuryColors.brandColor,
                        borderRadius: 100,
                        backgroundColor:
                          item === selectedSize
                            ? LuxuryColors.brandColor
                            : "transparent",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: FontSizes.xLarge,
                          fontFamily: FONTS.poppinsRegular,
                          color: item === selectedSize ? "white" : "black",
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            <View style={{ gap: 10 }}>
              <Text
                style={{ fontFamily: FONTS.TNR, fontSize: FontSizes.large }}
              >
                Product Details
              </Text>
              <Text
                // numberOfLines={2}
                ellipsizeMode="clip"
                style={{
                  fontFamily: FONTS.poppinsMedium,
                  //   color: LuxuryColors.gray,
                }}
              >
                {productDetail?.name}{" "}
              </Text>
              <Text
                // numberOfLines={2}
                ellipsizeMode="clip"
                style={{
                  fontFamily: FONTS.poppinsRegular,
                  color: LuxuryColors.gray,
                }}
              >
                {productDetail?.description}{" "}
                <Text
                  style={{
                    fontFamily: FONTS.poppinsMedium,
                    color: "black",
                    opacity: 0.6,
                  }}
                >
                  Read more...
                </Text>
              </Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <View
                style={{
                  width: "100%",
                  height: StyleSheet.hairlineWidth,
                  backgroundColor: LuxuryColors.liteGray,
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                {_fakeUsers.slice(0, 5).map((item, index) => {
                  return (
                    <View
                      key={item}
                      style={{
                        height: 40,
                        aspectRatio: 1,
                        borderRadius: 100,
                        borderWidth: StyleSheet.hairlineWidth * 4,
                        borderColor: LuxuryColors.liteGray,
                        marginLeft: index != 0 ? -8 : 0,
                        backgroundColor: "white",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        style={{ flex: 1 }}
                        transition={300}
                        source={{ uri: item }}
                      />
                    </View>
                  );
                })}
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: FONTS.poppinsRegular,
                  }}
                >
                  5k+ people pinned this
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: StyleSheet.hairlineWidth,
                  backgroundColor: LuxuryColors.liteGray,
                }}
              ></View>
              <View
                style={{ flexDirection: "row", gap: 20, marginVertical: 30 }}
              >
                <TouchableOpacity
                  onPress={() => {}}
                  activeOpacity={0.8}
                  style={{
                    flex: 1,
                    height: 50,
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: LuxuryColors.liteBlack,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.poppinsRegular,
                      fontSize: FontSizes.small,
                      color: "white",
                    }}
                  >
                    Buy now
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleAddItemToCart}
                  activeOpacity={0.8}
                  style={{
                    flex: 1,
                    height: 50,
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                    backgroundColor: LuxuryColors.liteBlack,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: FONTS.poppinsRegular,
                      fontSize: FontSizes.small,
                      color: "white",
                    }}
                  >
                    Add to cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
