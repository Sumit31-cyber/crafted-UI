import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { _windowHeight, FONTS, FontSizes } from "@/utils/constant";
import Feather from "@expo/vector-icons/Feather";

const AuthenticationTextInputArea = ({
  header,
  onChangeText,
  secured,
}: {
  header: string;
  onChangeText: (val: string) => void;
  secured: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{ width: "100%", gap: 6 }}>
      <Text
        style={{
          fontFamily: FONTS.poppinsRegular,
          fontSize: FontSizes.small,
          letterSpacing: 0.8,
        }}
      >
        {header}
      </Text>
      <View
        style={{
          backgroundColor: "white",
          paddingHorizontal: 10,
          height: _windowHeight * 0.05,
          borderRadius: 30,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          onChangeText={onChangeText}
          placeholder="email@example.com"
          secureTextEntry={secured && !showPassword}
          style={{
            flex: 1,
            fontFamily: FONTS.poppinsRegular,
            letterSpacing: 0.8,
          }}
        />

        {secured && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowPassword(!showPassword)}
            style={{ marginLeft: "auto" }}
          >
            {showPassword ? (
              <Feather name="eye" size={18} color="black" />
            ) : (
              <Feather name="eye-off" size={18} color="black" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AuthenticationTextInputArea;

const styles = StyleSheet.create({});
