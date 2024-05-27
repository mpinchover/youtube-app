import { Divider } from "@rneui/themed";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const VideoItem = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.videoItem}>
      <Text style={styles.channel}>Channel ID</Text>
      <Text style={styles.title}>Description</Text>
    </TouchableOpacity>
  );
};

const VideoSelection = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("AddVideoLinkScreen");
  };
  return (
    <View style={styles.container}>
      <Divider />
      <VideoItem onPress={onPress} />
      <Divider />
      <VideoItem onPress={onPress} />
      <Divider />
      <VideoItem onPress={onPress} />
      <Divider />
      <VideoItem onPress={onPress} />
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  videoItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  channel: {
    fontSize: 12,
    color: "#565657",
  },
  title: {
    marginTop: 10,
    color: "#565657",
  },
});

export default VideoSelection;
