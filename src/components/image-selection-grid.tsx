import { Image } from "@rneui/base";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const ImageInput = () => {
  const [image, setImage] = useState<string>("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result?.assets?.[0]?.uri) {
      console.log("Found URL");
      setImage(result.assets[0].uri);
    } else {
      console.log("no url");
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={styles.imageBox}>
      <Entypo name="image" size={24} color="grey" />
    </TouchableOpacity>
  );
};

const ImageSelectionGrid = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: "column",
        rowGap: 20,
      }}
    >
      <View style={styles.container}>
        <ImageInput />
        <ImageInput />
        <ImageInput />
      </View>
      <View style={styles.container}>
        <ImageInput />
        <ImageInput />
        <ImageInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  imageBox: {
    // borderWidth: 1,
    backgroundColor: "white",
    flex: 0.3,
    // width: "100%",
    // flexGrow: 1,
    // margin: 10,

    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
});

export default ImageSelectionGrid;
