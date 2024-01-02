import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Text, Button, Overlay, ListItem } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const YoutubeLinkItem = ({ title }) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.youtubeLink}>
          {/* <AntDesign style={styles.icon} name="youtube" color="red" size={24} /> */}
          <Text style={styles.youtubeLinkText} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    width: "100%",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 18,
    // flex: 1,
  },
  youtubeLinkText: {
    fontSize: 16,
  },
  youtubeLink: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default YoutubeLinkItem;
