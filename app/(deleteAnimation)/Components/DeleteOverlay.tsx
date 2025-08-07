import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { Trash2, X } from "lucide-react-native";
import CustomText from "@/components/CustomText";
import { _horizontalPadding, SCREEN_WIDTH } from "@/utils/constant";
import Animated, {
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  FadeIn,
  FadeOut,
  FadeOutLeft,
} from "react-native-reanimated";
import { useSharedState } from "@/context/SharedContext";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";
import { RFValue } from "react-native-responsive-fontsize";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const DeleteOverlay = () => {
  const {
    isSelectionEnabled,
    setIsSelectionEnabled,
    deleteMemoir,
    setDeleteMemoir,
  } = useSharedState();

  // Animation for the container
  const containerStyle = useAnimatedStyle(() => {
    const scaleValue = isSelectionEnabled ? 1 : 0;

    return {
      transform: [
        {
          scale: withTiming(scaleValue, {
            duration: 300,
          }),
        },
      ],
      opacity: withTiming(isSelectionEnabled ? 1 : 0, {
        duration: 300,
      }),
    };
  }, [isSelectionEnabled]);

  // Animation for the pill/modal transformation
  const pillStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(deleteMemoir ? screenHeight * 0.5 : 60, {
        duration: 400,
      }),
      width: withTiming(deleteMemoir ? screenWidth * 0.9 : screenWidth * 0.42, {
        duration: 400,
      }),
      borderRadius: withTiming(deleteMemoir ? 25 : 30, {
        duration: 400,
      }),
    };
  }, [deleteMemoir]);

  const contentOpacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(deleteMemoir ? 1 : 0, {
        duration: deleteMemoir ? 600 : 200,
      }),
    };
  }, [deleteMemoir]);

  const pillContentStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(deleteMemoir ? 1 : 1, {
        duration: 200,
      }),
    };
  }, [deleteMemoir]);

  const deleteButtonStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(deleteMemoir ? 150 : 100),
    };
  }, [deleteMemoir]);
  const cancelButtonStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(deleteMemoir ? 150 : 40),
    };
  }, [deleteMemoir]);
  const cancelTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(deleteMemoir ? 1 : 0),
      position: "absolute",
      alignSelf: "center",
    };
  }, [deleteMemoir]);
  const cancelIconStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(deleteMemoir ? 0 : 1),
      position: "absolute",
      alignSelf: "center",
    };
  }, [deleteMemoir]);

  return (
    <Animated.View style={[containerStyle, styles.container]}>
      <Animated.View style={[pillStyle, styles.pillContainer]}>
        {/* Default Pill Content */}
        <Animated.View style={[pillContentStyle, styles.pillContent]}>
          <Animated.View style={deleteButtonStyle}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setDeleteMemoir(true)}
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
                  setDeleteMemoir(false);
                } else {
                  setIsSelectionEnabled(false);
                  setDeleteMemoir(false);
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
        <Animated.View style={[contentOpacity, styles.modalContent]}>
          {/* {deleteMemoir && (
            <>
              <View style={styles.header}>
                <CustomText variant="h4" fontFamily="poppinsBold" color="#000">
                  Delete Memoir?
                </CustomText>
              </View>


              <View style={styles.previewSection}>
                <View style={styles.previewGrid}>

                  <View style={styles.previewItem}>
                    <View style={styles.previewImage} />
                  </View>
                  <View style={styles.previewItem}>
                    <View style={styles.previewImage} />
                  </View>
                  <View style={styles.previewItem}>
                    <View style={styles.previewImage} />
                  </View>

                </View>

                <View style={styles.memoirInfo}>
                  <CustomText
                    variant="h6"
                    fontFamily="poppinsMedium"
                    color="#000"
                  >
                    Holiday spots
                  </CustomText>
                  <CustomText
                    variant="h8"
                    fontFamily="poppinsRegular"
                    color="#666"
                  >
                    34 Images
                  </CustomText>
                </View>
              </View>


              <View style={styles.confirmationSection}>
                <CustomText
                  variant="h6"
                  fontFamily="poppinsRegular"
                  color="#000"
                  style={styles.confirmationText}
                >
                  Are you sure you want to{" "}
                  <CustomText
                    variant="h6"
                    fontFamily="poppinsBold"
                    color="#000"
                  >
                    delete 2 Memoirs
                  </CustomText>{" "}
                  from your list
                </CustomText>
              </View>


              <View style={styles.actionButtons}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    // Handle delete action
                    console.log("Deleting memoirs...");
                    setDeleteMemoir(false);
                    setIsSelectionEnabled(false);
                  }}
                  style={styles.deleteActionButton}
                >
                  <CustomText
                    variant="h6"
                    fontFamily="poppinsMedium"
                    color="white"
                  >
                    Delete
                  </CustomText>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setDeleteMemoir(false);
                  }}
                  style={styles.cancelButton}
                >
                  <CustomText
                    variant="h6"
                    fontFamily="poppinsMedium"
                    color="#666"
                  >
                    Cancel
                  </CustomText>
                </TouchableOpacity>
              </View>
            </>
          )} */}
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

export default DeleteOverlay;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    zIndex: 1000,
  },
  pillContainer: {
    backgroundColor: "white",
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
    padding: 24,
    justifyContent: "space-between",
    backgroundColor: "red",
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
