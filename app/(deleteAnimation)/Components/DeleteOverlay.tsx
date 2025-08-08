import { StyleSheet, TouchableOpacity, Dimensions, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Trash2, X } from "lucide-react-native";
import CustomText from "@/components/CustomText";
import {
  _horizontalPadding,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/utils/constant";
import Animated, {
  useAnimatedStyle,
  withTiming,
  FadeIn,
  useSharedValue,
  Easing,
  withDelay,
  FadeOut,
} from "react-native-reanimated";
import { useSharedState } from "@/context/SharedContext";
import { RFValue } from "react-native-responsive-fontsize";
import MemoirCard from "./MemoirCard";
import { getCardHeight, getCardWidth } from "@/utils/functions";
import { BORDER_RADIUS, GAP } from "./AllMemoirs";
import { MemoirViewOffset } from "@/constants/types";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const DeleteOverlay = () => {
  const {
    isSelectionEnabled,
    setIsSelectionEnabled,
    deleteMemoir,
    setDeleteMemoir,
    selectedMemoir,
    setSelectedMemoir,
  } = useSharedState();

  // Animation for the container - fade out entire overlay when closing
  const containerStyle = useAnimatedStyle(() => {
    const isVisible = isSelectionEnabled || deleteMemoir;

    return {
      opacity: withTiming(isVisible ? 1 : 0, {
        duration: isVisible ? 300 : 200, // Faster fade out
      }),
      // Add a slight scale animation to make the exit smoother
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.95, {
            duration: isVisible ? 300 : 200,
          }),
        },
      ],
      backgroundColor: withTiming(
        deleteMemoir ? "rgba(0,0,0,0.5)" : "transparent"
      ),
    };
  }, [isSelectionEnabled, deleteMemoir]);

  // Animation for the pill/modal transformation
  const pillStyle = useAnimatedStyle(() => {
    const isClosing = !isSelectionEnabled && !deleteMemoir;

    return {
      height: withTiming(deleteMemoir ? screenHeight * 0.5 : 60, {
        duration: isClosing ? 0 : 400, // No animation when closing
        easing: Easing.out(Easing.cubic),
      }),
      width: withTiming(
        deleteMemoir ? screenWidth * 0.95 : screenWidth * 0.42,
        {
          duration: isClosing ? 0 : 400, // No animation when closing
          easing: Easing.out(Easing.cubic),
        }
      ),
      borderRadius: withTiming(deleteMemoir ? 25 : 30, {
        duration: isClosing ? 0 : 400, // No animation when closing
        easing: Easing.out(Easing.cubic),
      }),
    };
  }, [deleteMemoir, isSelectionEnabled]);

  const contentOpacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(deleteMemoir ? 1 : 0, {
        duration: deleteMemoir ? 600 : 200,
      }),
    };
  }, [deleteMemoir]);

  const deleteButtonStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(deleteMemoir ? 150 : 100, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      }),
    };
  }, [deleteMemoir]);

  const cancelButtonStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(deleteMemoir ? 150 : 40, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      }),
    };
  }, [deleteMemoir]);

  const cancelTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(deleteMemoir ? 1 : 0, {
        duration: deleteMemoir ? 300 : 150,
      }),
      position: "absolute",
      alignSelf: "center",
    };
  }, [deleteMemoir]);

  return (
    <Animated.View
      pointerEvents={deleteMemoir ? "auto" : "box-none"}
      style={[containerStyle, styles.container]}
    >
      {selectedMemoir && (
        <>
          {selectedMemoir.map((item, index) => {
            return (
              <TransitionMemoirCard
                key={index}
                item={item}
                index={index}
                totalCards={selectedMemoir.length}
              />
            );
          })}
        </>
      )}
      <Animated.View style={[pillStyle, styles.pillContainer]}>
        {/* Default Pill Content */}
        <Animated.View style={[styles.pillContent]}>
          <Animated.View style={deleteButtonStyle}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setDeleteMemoir(true);
                setIsSelectionEnabled(false);
              }}
              style={styles.deleteButton}
            >
              <Trash2 color="white" size={16} />
              <CustomText variant="h7" fontFamily="poppinsMedium" color="white">
                Delete
              </CustomText>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={[cancelButtonStyle, styles.closeButton]}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                height: "100%",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                if (deleteMemoir) {
                  setIsSelectionEnabled(true);
                  setDeleteMemoir(false);
                } else {
                  setDeleteMemoir(false);
                  setIsSelectionEnabled(false);
                  setSelectedMemoir(null);
                }
              }}
            >
              <Animated.View style={cancelTextStyle}>
                <CustomText
                  variant="h7"
                  fontFamily="poppinsMedium"
                  color="white"
                >
                  Cancel
                </CustomText>
              </Animated.View>

              {!deleteMemoir && (
                <Animated.View entering={FadeIn}>
                  <X color="white" size={16} />
                </Animated.View>
              )}
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>

        {/* Expanded Modal Content */}
        {deleteMemoir && (
          <Animated.View
            entering={FadeIn.delay(100)}
            exiting={FadeOut}
            style={[contentOpacity, styles.modalContent]}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginVertical: _horizontalPadding,
                gap: _horizontalPadding,
              }}
            >
              <View
                style={{
                  height: RFValue(6),
                  width: RFValue(60),
                  backgroundColor: "#f4f4f4",
                  borderRadius: 100,
                }}
              ></View>
              <CustomText variant="h5" fontFamily="FiraCodeMedium">
                Delete Memoir?
              </CustomText>
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: "red",
                height: "100%",
                width: "100%",
              }}
            ></View>
            {deleteMemoir && (
              <Animated.View entering={FadeIn.delay(200)}>
                <CustomText
                  variant="h5"
                  fontFamily="FiraCodeMedium"
                  style={{ textAlign: "center", marginBottom: RFValue(10) }}
                >
                  Are you sure you want to{" "}
                  <CustomText
                    variant="h5"
                    fontFamily="FiraCodeBold"
                    style={{ textAlign: "center", marginBottom: RFValue(10) }}
                  >
                    delete {selectedMemoir?.length} Memoirs
                  </CustomText>{" "}
                  from the list
                </CustomText>
              </Animated.View>
            )}
          </Animated.View>
        )}
      </Animated.View>
    </Animated.View>
  );
};

export default DeleteOverlay;

const TransitionMemoirCard = ({
  item,
  index,
  totalCards,
}: {
  item: MemoirViewOffset;
  index: number;
  totalCards: number;
}) => {
  const CARD_HEIGHT = getCardHeight();
  const CARD_WIDTH = getCardWidth();
  const INITIAL_POS_X = item.pageX + _horizontalPadding - GAP / 2;
  const INITIAL_POS_Y = item.pageY + _horizontalPadding + GAP * 2 - 20;

  const { deleteMemoir } = useSharedState();

  // Calculate initial position from the item's original location
  const sharedX = useSharedValue(INITIAL_POS_X);
  const sharedY = useSharedValue(INITIAL_POS_Y);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(1);

  // Calculate stacked card offsets
  const STACK_OFFSET_X = 20; // Horizontal offset between cards
  const STACK_OFFSET_Y = 12; // Vertical offset between cards
  const ROTATION_VARIATION = 3; // Max rotation difference between cards

  // Calculate final positions for stacked effect
  const centerX = SCREEN_WIDTH / 2 - CARD_WIDTH / 2;
  const centerY = SCREEN_HEIGHT / 2 - CARD_HEIGHT / 2;

  // Create stacking effect - cards further back have more offset
  const stackIndex = totalCards - index - 1; // Reverse index so first card is on top
  const finalX = centerX + stackIndex * STACK_OFFSET_X;
  const finalY = SCREEN_HEIGHT * 0.53;
  const finalScale = 0.6;

  // Start animation with slight delay based on index
  const delay = 0;

  useEffect(() => {
    // Animate to stacked position
    sharedX.value = withDelay(
      delay,
      withTiming(finalX, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      })
    );

    sharedY.value = withDelay(
      delay,
      withTiming(finalY, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      })
    );

    // Scale down cards that are further back in the stack
    // Each card slightly smaller
    scale.value = withDelay(
      delay,
      withTiming(finalScale, {
        duration: 500,
        easing: Easing.out(Easing.cubic),
      })
    );

    // Rotate cards with variation
    const rotationValue = 4;
    const rotationSign = index % 2 === 0 ? rotationValue : -rotationValue;
    const rotationAmount =
      (Math.random() * ROTATION_VARIATION + 1) * rotationSign;
    rotate.value = withDelay(
      delay,
      withTiming(rotationAmount, {
        duration: 600,
        easing: Easing.out(Easing.cubic),
      })
    );

    // Fade in
    opacity.value = withDelay(
      delay,
      withTiming(deleteMemoir ? 1 : 0, {
        duration: deleteMemoir ? 0 : 300,
      })
    );
  }, [index, totalCards, deleteMemoir]);

  useEffect(() => {
    if (deleteMemoir === false) {
      sharedX.value = withDelay(
        delay,
        withTiming(INITIAL_POS_X, {
          duration: 500,
          easing: Easing.out(Easing.cubic),
        })
      );
      sharedY.value = withDelay(
        delay,
        withTiming(INITIAL_POS_Y, {
          duration: 500,
          easing: Easing.out(Easing.cubic),
        })
      );
      scale.value = withDelay(
        delay,
        withTiming(1, { duration: 500, easing: Easing.out(Easing.cubic) })
      );
      rotate.value = withDelay(
        delay,
        withTiming(0, { duration: 600, easing: Easing.out(Easing.cubic) })
      );
    }
  }, [deleteMemoir]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      top: sharedY.value,
      left: sharedX.value,
      opacity: opacity.value,
      transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
    };
  }, [deleteMemoir]);

  // Calculate z-index so top card has highest z-index
  const zIndexValue = 10000 + (totalCards - index);

  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          position: "absolute",
          zIndex: zIndexValue,
          shadowColor: "rgba(99, 99, 99, 0.8)",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          //   borderWidth: 2,
          //   borderRadius: BORDER_RADIUS,

          //   boxShadow: " rgba(99, 99, 99, 0.8) 0px 2px 8px 0px",
        },
      ]}
    >
      <MemoirCard
        index={index}
        // @ts-ignore
        item={item}
        onLongPress={() => {
          console.log("Card pressed:", index);
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // bottom: 30,
    paddingBottom: 30,
    zIndex: 1000,
    flex: 1,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  pillContainer: {
    // backgroundColor: "rgba(0,0,0,0.1)",
    backgroundColor: "#fefefe",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    overflow: "hidden",
  },
  pillContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    paddingHorizontal: 8,
    gap: 12,
    marginTop: "auto",
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff4757",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 6,
  },
  closeButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6c757d",
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  modalContent: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: RFValue(50),
    alignItems: "center",
    paddingHorizontal: RFValue(20),
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  previewSection: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  previewGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginBottom: 16,
  },
  previewItem: {
    width: 60,
    height: 60,
  },
  previewImage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 12,
  },
  memoirInfo: {
    alignItems: "center",
  },
  confirmationSection: {
    marginBottom: 20,
  },
  confirmationText: {
    textAlign: "center",
    lineHeight: 24,
  },
  actionButtons: {
    gap: 12,
  },
  deleteActionButton: {
    backgroundColor: "#ff4757",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "transparent",
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
  },
});
