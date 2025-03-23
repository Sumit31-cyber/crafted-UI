import { ScrollView, StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import {
  _horizontalPadding,
  _windowHeight,
  _windowWidth,
  FONTS,
  FontSizes,
  LuxuryColors,
} from "@/utils/constant";
import { Image } from "expo-image";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const _containerHeight = _windowHeight * 0.17;
const _carousalWidth = _windowWidth - _horizontalPadding * 2;
const _gap = 10;
const _indicatorSize = 10;
type PropsType = {
  style?: ViewStyle;
};
const scrollViewItems = new Array(3).fill(0).map((_, index) => ({ id: index }));
const OfferCarousal = ({ style }: PropsType) => {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((e) => {
    const x = e.contentOffset.x;
    console.log(x / (_carousalWidth + _gap));
    scrollX.value = x;
  });
  return (
    <View style={style}>
      <Animated.ScrollView
        horizontal
        onScroll={onScroll}
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        snapToInterval={_carousalWidth + _gap}
        contentContainerStyle={{
          gap: _gap,
        }}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      >
        {scrollViewItems.map((item) => {
          return (
            <View
              key={item.id}
              style={[
                {
                  height: _containerHeight,
                  width: _carousalWidth,
                  backgroundColor: "#efeae7",
                  borderRadius: 20,
                },
              ]}
            >
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingHorizontal: 10,
                    gap: 10,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontFamily: FONTS.TNRBold,
                        fontSize: FontSizes.xLarge,
                      }}
                    >
                      Get 40% off for
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTS.TNRBold,
                        fontSize: FontSizes.xLarge,
                      }}
                    >
                      all items
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: FONTS.poppinsRegular,
                      fontSize: FontSizes.tiny,

                      color: "#8d8b8c",
                    }}
                  >
                    Promo until 31 May 2025
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: "auto",
                    flex: 1.2,
                  }}
                >
                  <Image
                    source={require("@/assets/images/girl-png.png")}
                    style={{
                      height: _containerHeight,
                    }}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </Animated.ScrollView>
      <View style={{ flexDirection: "row", alignSelf: "center", gap: 3 }}>
        {scrollViewItems.map((item, index) => {
          return <RenderIndicator scrollX={scrollX} index={index} />;
        })}
      </View>
    </View>
  );
};

export default OfferCarousal;

const styles = StyleSheet.create({});

type RenderIndicatorProps = {
  scrollX: SharedValue<number>;
  index: number;
};

const RenderIndicator = ({ scrollX, index }: RenderIndicatorProps) => {
  const rStyle = useAnimatedStyle(() => {
    const width = interpolate(
      scrollX.value,
      [
        (index - 1) * _carousalWidth,
        index * _carousalWidth,
        (index + 1) * _carousalWidth,
      ],
      [_indicatorSize, _indicatorSize * 2, _indicatorSize],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      scrollX.value,
      [
        (index - 1) * _carousalWidth,
        index * _carousalWidth,
        (index + 1) * _carousalWidth,
      ],
      [0.4, 1, 0.4],
      Extrapolation.CLAMP
    );
    return {
      width,
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        rStyle,
        {
          height: _indicatorSize,
          borderRadius: 30,
          backgroundColor: LuxuryColors.brandColor,
          marginTop: 10,
        },
      ]}
    ></Animated.View>
  );
};

// import { ScrollView, StyleSheet, Text, View, ViewStyle } from "react-native";
// import React from "react";
// import {
//   _horizontalPadding,
//   _windowHeight,
//   _windowWidth,
//   FONTS,
//   FontSizes,
// } from "@/utils/constant";
// import { Image } from "expo-image";

// const _containerHeight = _windowHeight * 0.17;
// const _carousalWidth = _windowWidth - _horizontalPadding * 2;
// const _gap = 10; // Define the gap between items

// type PropsType = {
//   style?: ViewStyle;
// };

// const OfferCarousal = ({ style }: PropsType) => {
//   return (
//     <ScrollView
//       horizontal
//       decelerationRate={"fast"}
//       snapToInterval={_carousalWidth + _gap} // Adjust snapToInterval
//       snapToAlignment="start" // Ensure snapping aligns to the start of the item
//       contentContainerStyle={{
//         // paddingHorizontal: _horizontalPadding,
//         gap: _gap,
//       }} // Add padding and gap
//       showsHorizontalScrollIndicator={false}
//     >
//       {new Array(3)
//         .fill(0)
//         .map((_, index) => ({ id: index }))
//         .map((item) => {
//           return (
//             <View
//               key={item.id}
//               style={[
//                 {
//                   height: _containerHeight,
//                   width: _carousalWidth,
//                   backgroundColor: "#efeae7",
//                   borderRadius: 20,
//                 },
//                 style,
//               ]}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   flex: 1,
//                 }}
//               >
//                 <View
//                   style={{
//                     flex: 1,
//                     justifyContent: "center",
//                     paddingHorizontal: 10,
//                     gap: 10,
//                   }}
//                 >
//                   <View>
//                     <Text
//                       style={{
//                         fontFamily: FONTS.TNRBold,
//                         fontSize: FontSizes.xLarge,
//                       }}
//                     >
//                       Get 40% off for
//                     </Text>
//                     <Text
//                       style={{
//                         fontFamily: FONTS.TNRBold,
//                         fontSize: FontSizes.xLarge,
//                       }}
//                     >
//                       all items
//                     </Text>
//                   </View>
//                   <Text
//                     style={{
//                       fontFamily: FONTS.poppinsRegular,
//                       fontSize: FontSizes.tiny,
//                       color: "#8d8b8c",
//                     }}
//                   >
//                     Promo until 31 May 2025
//                   </Text>
//                 </View>
//                 <View
//                   style={{
//                     marginLeft: "auto",
//                     flex: 1.2,
//                   }}
//                 >
//                   <Image
//                     source={require("@/assets/images/girl-png.png")}
//                     style={{
//                       height: _containerHeight,
//                     }}
//                   />
//                 </View>
//               </View>
//             </View>
//           );
//         })}
//     </ScrollView>
//   );
// };

// export default OfferCarousal;

// const styles = StyleSheet.create({});
