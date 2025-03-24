import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BlurBackdrop from "@/components/ui/BlurBackdrop";
import useCustomHeader from "@/customHooks/LuxuryECommernceHooks/useCustomHeader";
import { SimpleLineIcons } from "@expo/vector-icons";

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
      <Text>Account</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
