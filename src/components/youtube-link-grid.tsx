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
// const YoutubeLinkItem = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={image}
//         resizeMode="cover"
//         style={styles.image}
//       ></ImageBackground>
//       <View style={styles.delete}>
//         <FontAwesome name="remove" size={15} color="black" />
//       </View>
//     </View>
//   );
// };

const YoutubeInput = () => {
  return (
    // <TouchableOpacity style={styles.videoContainer}>
    //   <AntDesign name="youtube" size={24} color="grey" />
    // </TouchableOpacity>
    <TouchableOpacity style={styles.videoContainer}>
      <AntDesign name="youtube" size={24} color="grey" />
    </TouchableOpacity>
  );
};

const YoutubeLinkGrid = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: "column",
        rowGap: 20,
      }}
    >
      <View style={styles.container}>
        <YoutubeInput />
        <YoutubeInput />
        <YoutubeInput />
      </View>
      <View style={styles.container}>
        <YoutubeInput />
        <YoutubeInput />
        <YoutubeInput />
      </View>
      {/* <View style={styles.container}>
        <YoutubeInput />
        <YoutubeInput />
        <YoutubeInput />
      </View> */}
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
