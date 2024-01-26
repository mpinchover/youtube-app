import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import {
  Input,
  Icon,
  Text,
  Button,
  Slider,
  ListItem,
  Divider,
  Overlay,
} from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useState } from "react";
import YoutubeLinkGrid from "../components/youtube-link-grid";
import Label from "../components/label";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import ImageSelectionGrid from "../components/image-selection-grid";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { SettingsHeader } from "../components/common/headers";

const linkItems = [
  {
    title: "How to grow your own candy",
  },
  {
    title: "Miley Cryus live at the Grand Fox stadium",
  },
  {
    title: "Best deals of 2023 on Amazon",
  },
  {
    title:
      "Blender hacks for Blender 3.2. How to model like a pro and get your work noticed by the top VFX studios",
  },
  {
    title: "Halo 2: behind the scenes with the studio",
  },
];
export default function Settings({ navigation }) {
  const [visible, setVisible] = useState(true);
  const [multiSliderValue, setMultiSliderValue] = useState([3, 7]);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [youtubeUploadError, setYoutubeUploadError] = useState("");
  const [isUploadingYoutubeUrl, setIsUploadingYoutubeUrl] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
    setYoutubeUrl("");
  };

  const keyExtractor = (item, index) => index.toString();

  const selectVideoForUpload = () => {
    toggleOverlay();
  };

  const handleUploadYoutubeUrl = () => {
    if (!validateYoutubeUrl(youtubeUrl)) {
      console.log("failed validation");
      setYoutubeUploadError("this youtube url doesn't look right, try again");
      return;
    }
    console.log("passed validation");
    setIsUploadingYoutubeUrl(true);
  };

  function validateYoutubeUrl(url) {
    const regex = /^https:\/\/www\.youtube\.com+$/;
    return regex.test(url.toLowerCase());
  }

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.settingsSection}> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("AccountProfile")}
        style={styles.settingsTab}
      >
        <Text style={{ fontSize: 16 }}>Account</Text>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        onPress={() => navigation.navigate("DatingFilters")}
        style={styles.settingsTab}
      >
        <Text style={{ fontSize: 16 }}>Dating filters</Text>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.settingsSection}>
        <SettingsHeader title="Images" />

        <ImageSelectionGrid />
      </View>
      <View style={styles.settingsSection}>
        <SettingsHeader title="Youtube videos" />
        <YoutubeLinkGrid
          selectVideoForUpload={selectVideoForUpload}
          navigation={navigation}
        />
      </View>
      <Overlay
        overlayStyle={{
          // width: "100%",
          // marginHorizontal: 100,
          width: Dimensions.get("window").width - 20,
          padding: 10,
          paddingVertical: 40,
        }}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            // marginBottom: 10,
          }}
        >
          Paste a youtube video url to upload
        </Text>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          value={youtubeUrl}
          onChangeText={(text) => {
            setYoutubeUploadError("");
            setYoutubeUrl(text);
          }}
          inputStyle={{
            fontSize: 14,
          }}
          containerStyle={{
            width: "auto",
            margin: 0,
            padding: 0,
            paddingHorizontal: 0,
          }}
          style={{
            margin: 0,
            padding: 0,
            paddingHorizontal: 0,
          }}
          placeholder="Enter youtube url"
        />
        {/* <Text>Hello from Overlay!</Text> */}
        <Text>{youtubeUploadError}</Text>
        <Button
          style={{ marginTop: 10 }}
          onPress={handleUploadYoutubeUrl}
          title="Upload"
        ></Button>
      </Overlay>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    // padding: 8,
  },
  settingsTab: {
    // fontSize: 18,
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
    padding: 12,
    backgroundColor: "white",
    // marginBottom: 10,
  },
  // overlay: {
  //   width: Dimensions.get("window").width - 1000,
  //   justifyContent: "flex-start",
  // },
  inputStyle: {
    fontSize: 14,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    // paddingHorizontal: 10,
    width: "100%",
  },
  button: {
    // alignItems: "flex-start",
    // borderWidth: 1,
    alignSelf: "flex-start",
    // padding: 0,
    // margin: 0,
    // marginLeft: 10,
  },
  linksContainer: {
    // paddingBottom: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    // alignItems: "center",
    // justifyContent: "center",
  },
  settingsSection: {
    // marginBottom: 4,
    marginTop: 20,
    // paddingHorizontal: 10,
  },
});
