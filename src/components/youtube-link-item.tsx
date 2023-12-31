import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Text, Button, Overlay, ListItem } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const YoutubeLinkItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.youtubeLink}>
        {/* <AntDesign style={styles.icon} name="youtube" color="red" size={24} /> */}
        <Text numberOfLines={1}>{title}</Text>
      </View>
      <Ionicons
        style={styles.remove}
        name="remove-circle-outline"
        size={24}
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  youtubeLink: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    // flexGrow: 1,
    marginRight: 40,
  },
  icon: {
    marginRight: 10,
  },
  remove: {
    alignSelf: "flex-end",
    alignContent: "flex-end",
  },
});

export default YoutubeLinkItem;
