import { TouchableOpacity, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export const optionsScreenConfig = ({ navigation }) => {
  return {
    headerTitle: "",
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            style={{ paddingHorizontal: 10 }}
            name="left"
            size={16}
            color="#007AFF"
          />
        </TouchableOpacity>
      );
    },
  };
};

export const optionsAddVideoLinkConfig = ({ navigation }) => {
  return {
    presentation: "modal",
  };
};

export const optionsScreenMobileValidationConfig = ({ navigation }) => {
  return {
    headerTitle: "",
    headerLeft: () => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile preview")}
        >
          <AntDesign
            style={{ paddingHorizontal: 10 }}
            name="left"
            size={16}
            color="#007AFF"
          />
        </TouchableOpacity>
      );
    },
  };
};

export const profileSettingsTabsScreenConfig = ({ navigation }) => {
  return {
    headerShadowVisible: false, // applied her
    headerLeft: () => {
      return null;
    },
    headerRight: () => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 5,
            paddingHorizontal: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "#007AFF", fontSize: 14 }}>Done</Text>
        </TouchableOpacity>
      );
    },
  };
};

export const profilePreviewScreenConfig = ({ navigation }) => {
  return {
    headerRight: () => {
      return (
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 5,
            paddingHorizontal: 10,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("ProfileSettingsTabs")}
        >
          <Text style={{ color: "#007AFF", fontSize: 14 }}>Edit</Text>
        </TouchableOpacity>
      );
    },
  };
};
