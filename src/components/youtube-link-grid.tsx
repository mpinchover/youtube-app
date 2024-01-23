import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Text, Button, Overlay, ListItem } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
import { Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const image = {
  uri: "https://img.youtube.com/vi/YV64LrneGRE/maxresdefault.jpg",
};

const YoutubeInput = ({ onPress, idx }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(idx)}
      style={styles.videoContainer}
    >
      <AntDesign name="youtube" size={24} color="grey" />
    </TouchableOpacity>
  );
};

const YoutubeLinkGrid = ({ navigation }) => {
  const setYoutubeVideoLink = (idx) => {
    console.log("idx is", idx);
    navigation.navigate("YoutubeVideoSelection");
  };

  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: "column",
        rowGap: 20,
      }}
    >
      <View style={styles.container}>
        <YoutubeInput idx={1} onPress={setYoutubeVideoLink} />
        <YoutubeInput idx={2} onPress={setYoutubeVideoLink} />
        <YoutubeInput idx={3} onPress={setYoutubeVideoLink} />
      </View>
      <View style={styles.container}>
        <YoutubeInput idx={4} onPress={setYoutubeVideoLink} />
        <YoutubeInput idx={5} onPress={setYoutubeVideoLink} />
        <YoutubeInput idx={6} onPress={setYoutubeVideoLink} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // width: "100%",
    paddingHorizontal: 10,
    flex: 1,
    // borderWidth: 1,
  },
  videoContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    aspectRatio: 1,
  },
});

export default YoutubeLinkGrid;
