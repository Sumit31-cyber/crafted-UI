import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { Logo } from "@/assets/svgs/luxuryECommSvgs/svgs";
import Backdrop from "@/components/ui/Backdrop";
import { _windowWidth, FONTS, FontSizes } from "@/utils/constant";
import AuthenticationTextInputArea from "@/components/ui/AuthenticationTextInputArea";
import Feather from "@expo/vector-icons/Feather";
import BigButton from "@/components/ui/BigButton";
import SocialMediaButton, {
  ButtonTypes,
} from "@/components/ui/SocialMediaButton";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const signIn = () => {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Backdrop />
      <StatusBar style="dark" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"always"}
        keyboardDismissMode="interactive"
        // contentContainerStyle={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Pressable
          onPress={() => {
            Keyboard.dismiss();
          }}
          style={{ padding: _windowWidth * 0.03 }}
        >
          <View style={{ alignItems: "center" }}>
            <Logo size={_windowWidth * 0.15} />
          </View>
          <View style={{ paddingBottom: 10, paddingTop: 22 }}>
            <Text style={styles.headerTextStyle}>Create your</Text>
            <Text style={styles.headerTextStyle}>account</Text>
          </View>

          <Text
            style={{
              fontFamily: FONTS.poppinsRegular,
              letterSpacing: 0.8,
              fontSize: FontSizes.tiny,
              color: "#8d8b8c",
            }}
          >
            Enter your email and password to create your account
          </Text>
          <View style={{ marginVertical: 30, gap: _windowWidth * 0.05 }}>
            <AuthenticationTextInputArea
              header="Username"
              onChangeText={(val) => console.log(val)}
              secured={false}
            />
            <AuthenticationTextInputArea
              header="Email"
              onChangeText={(val) => console.log(val)}
              secured={false}
            />
            <AuthenticationTextInputArea
              header="Password"
              onChangeText={(val) => console.log(val)}
              secured={true}
            />
          </View>

          <BigButton title="Sign up" onPress={() => {}} />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              marginVertical: 20,
            }}
          >
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                flex: 1,
                backgroundColor: "#8d8b8c",
              }}
            />
            <Text style={{ marginHorizontal: 10 }}>Or</Text>
            <View
              style={{
                height: StyleSheet.hairlineWidth,
                flex: 1,
                backgroundColor: "#8d8b8c",
              }}
            />
          </View>
          <SocialMediaButton
            buttonType={ButtonTypes.Google}
            onPress={() => {
              console.log("Logging in with google");
            }}
          />
          <SocialMediaButton
            buttonType={ButtonTypes.Facebook}
            onPress={() => {
              console.log("Logging in with facebook");
            }}
          />
        </Pressable>

        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text
            style={{
              color: "#292420",
              fontFamily: FONTS.poppinsRegular,
              fontSize: FontSizes.tiny,
              marginTop: "auto",
              textAlign: "center",
            }}
          >
            Already have account?{"   "}
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              router.back();
            }}
          >
            <Text style={{ color: "#fa9a67", fontFamily: FONTS.poppinsBold }}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default signIn;

const styles = StyleSheet.create({
  headerTextStyle: {
    fontFamily: FONTS.TNRBold,
    fontSize: FontSizes.xLarge,
    letterSpacing: 1.2,
    color: "#292420",
  },
});
