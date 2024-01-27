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
import UploadYoutubeDialogBox from "./upload-youtube-dialog-box";
import axios from "axios";

const image = {
  uri: "https://img.youtube.com/vi/YV64LrneGRE/maxresdefault.jpg",
};

const YoutubeInput = ({ onPress, idx, backgroundImage }) => {
  // if (backgroundImage) {
  //   return (
  //     <View style={styles.videoContainerWithImage}>
  //       <ImageBackground
  //         source={{
  //           uri: backgroundImage,
  //         }}
  //         resizeMode="cover"
  //         style={styles.image}
  //       />
  //     </View>
  //   );
  // }
  return (
    <TouchableOpacity
      onPress={() => onPress(idx)}
      style={styles.videoContainer}
    >
      {backgroundImage ? (
        <ImageBackground
          source={{
            uri: backgroundImage,
          }}
          // resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <AntDesign name="youtube" size={24} color="grey" />
      )}
    </TouchableOpacity>
  );
};

const YoutubeLinkGrid = ({}) => {
  const [visible, setVisible] = useState(false);
  // const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isUploadingYoutubeUrl, setIsUploadingYoutubeUrl] = useState(false);
  const [youtubeUploadError, setYoutubeUploadError] = useState("");
  const [youtubeBackgrounds, setYoutubeBackgrounds] = useState({});
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const selectVideoForUpload = (idx) => {
    setActiveIndex(idx);
    setVisible(true);
  };

  const handleUploadYoutubeUrl = async (youtubeUrl) => {
    // console.log("index is ", activeIndex);
    if (!validateYoutubeUrl(youtubeUrl)) {
      setYoutubeUploadError("This youtube url doesn't look right, try again");
      return;
    }
    setIsUploadingYoutubeUrl(true);

    try {
      for (let i = 0; i < 30; i++) {
        await axios.get("https://jsonplaceholder.typicode.com/comments");
      }
      setYoutubeBackgrounds((prev) => {
        return {
          ...prev,
          [activeIndex]:
            "https://img.youtube.com/vi/IE2gBsIoT_M/maxresdefault.jpg",
        };
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsUploadingYoutubeUrl(false);
      setVisible(false);
    }
  };

  function validateYoutubeUrl(url) {
    // const regex = /^https:\/\/www\.youtube\.com(\/.*)?$/;
    // return regex.test(url.toLowerCase());
    return url.toLowerCase().startsWith("https://www.youtube.com");
  }

  // const setYoutubeVideoLink = (idx) => {
  //   // console.log("idx is", idx);
  //   navigation.navigate("YoutubeVideoSelection");
  // };

  const toggleOverlay = () => {
    setVisible(!visible);
    // setYoutubeUrl("");
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
        <YoutubeInput
          backgroundImage={youtubeBackgrounds[0]}
          idx={0}
          onPress={() => selectVideoForUpload(0)}
        />
        <YoutubeInput
          backgroundImage={youtubeBackgrounds[1]}
          idx={1}
          onPress={() => selectVideoForUpload(1)}
        />
        <YoutubeInput
          backgroundImage={youtubeBackgrounds[2]}
          idx={2}
          onPress={() => selectVideoForUpload(2)}
        />
      </View>
      <View style={styles.container}>
        <YoutubeInput
          backgroundImage={youtubeBackgrounds[3]}
          idx={3}
          onPress={() => selectVideoForUpload(3)}
        />
        <YoutubeInput
          backgroundImage={youtubeBackgrounds[4]}
          idx={4}
          onPress={() => selectVideoForUpload(4)}
        />
        <YoutubeInput
          backgroundImage={youtubeBackgrounds[5]}
          idx={5}
          onPress={() => selectVideoForUpload(5)}
        />
      </View>

      <Overlay
        overlayStyle={{
          // width: "100%",
          // marginHorizontal: 100,
          width: Dimensions.get("window").width - 20,
          height: Dimensions.get("window").height / 3,
          justifyContent: "center",
        }}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <UploadYoutubeDialogBox
          isUploadingYoutubeUrl={isUploadingYoutubeUrl}
          setYoutubeUploadError={setYoutubeUploadError}
          handleUploadYoutubeUrl={handleUploadYoutubeUrl}
          youtubeUploadError={youtubeUploadError}
        />
      </Overlay>
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
  videoContainerWithImage: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
    aspectRatio: 1,
  },
  image: {
    // flex: 1,
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default YoutubeLinkGrid;
