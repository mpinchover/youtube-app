import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { Input, Icon, Text, Button, Slider, ListItem } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useState } from "react";
import YoutubeLinkItem from "../components/youtube-link-item";
import Label from "../components/label";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

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
  {
    title: "How to grow your own candy",
  },
  {
    title: "Miley Cryus live at the Grand Fox stadium",
  },
  {
    title: "Best deals of 2023 on Amazon",
  },
  // {
  //   title:
  //     "Blender hacks for Blender 3.2. How to model like a pro and get your work noticed by the top VFX studios",
  // },
  // {
  //   title: "Halo 2: behind the scenes with the studio",
  // },
  // {
  //   title: "How to grow your own candy",
  // },
  // {
  //   title: "Miley Cryus live at the Grand Fox stadium",
  // },
  // {
  //   title: "Best deals of 2023 on Amazon",
  // },
  // {
  //   title:
  //     "Blender hacks for Blender 3.2. How to model like a pro and get your work noticed by the top VFX studios",
  // },
  // {
  //   title: "Halo 2: behind the scenes with the studio",
  // },
  // {
  //   title: "How to grow your own candy",
  // },
  // {
  //   title: "Miley Cryus live at the Grand Fox stadium",
  // },
  // {
  //   title: "Best deals of 2023 on Amazon",
  // },
  // {
  //   title:
  //     "Blender hacks for Blender 3.2. How to model like a pro and get your work noticed by the top VFX studios",
  // },
  // {
  //   title: "Halo 2: behind the scenes with the studio",
  // },
];
export default function Settings() {
  const [visible, setVisible] = useState(true);
  const [multiSliderValue, setMultiSliderValue] = useState([3, 7]);

  const multiSliderValuesChange = (values) => setMultiSliderValue(values);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const renderItem = ({ item }) => {
    return (
      <ListItem>
        <YoutubeLinkItem title={item.title} />
      </ListItem>
    );
  };

  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={styles.container}>
      <Text h4 style={styles.header}>
        Account
      </Text>
      <Label label="Name" value="Matt" />
      <Label label="Date of birth" value="8/31/1994" />
      <Label label="Gender" value="Male" />
      <Label label="Gender preference" value="Female" />

      <MultiSlider
        values={multiSliderValue}
        onValuesChange={multiSliderValuesChange}
        min={0}
        max={10}
        step={1}
        snapped
        // minMarkerOverlapDistance={4}
      />

      <Input
        inputStyle={styles.inputStyle}
        placeholder="Email"
        leftIcon={{
          type: "material-icons",
          name: "email",
          color: "grey",
          size: 16,
        }}
        rightIcon={{
          type: "ant-design",
          name: "edit",
          color: "grey",
          size: 16,
        }}
        inputContainerStyle={styles.inputContainerStyle}
      />
      <Input
        inputStyle={styles.inputStyle}
        placeholder="Mobile"
        leftIcon={{
          type: "material-icons",
          name: "phone",
          color: "grey",
          size: 16,
        }}
        rightIcon={{
          type: "ant-design",
          name: "edit",
          color: "grey",
          size: 16,
        }}
        inputContainerStyle={styles.inputContainerStyle}
      />
      <Text h4 style={styles.header}>
        Matching
      </Text>

      <Button
        onPress={toggleOverlay}
        style={styles.button}
        title="Add Youtube link"
        type="clear"
      />
      <View style={styles.linksContainer}>
        <FlatList
          contentContainerStyle={{
            paddingBottom: 200,
          }}
          keyExtractor={keyExtractor}
          data={linkItems}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

/*
     {/* <Overlay
        style={styles.overlay}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <Input
          placeholder="Add youtube link"
          leftIcon={{ type: "ant-design", name: "youtube", color: "grey" }}
          inputContainerStyle={styles.inputContainerStyle}
        />
        <Text style={styles.overlay}>Hello!</Text>
        {/* <Button type="clear" title="Add link" onPress={toggleOverlay} /> }
      </Overlay>
       */

const styles = StyleSheet.create({
  header: {
    padding: 8,
  },
  overlay: {
    width: Dimensions.get("window").width - 1000,
    justifyContent: "flex-start",
  },
  inputStyle: {
    fontSize: 14,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    width: "100%",
  },
  button: {
    // alignItems: "flex-start",
    // borderWidth: 1,
    alignSelf: "flex-start",
    // marginLeft: 10,
  },
  linksContainer: {
    paddingBottom: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
