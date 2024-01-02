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
} from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useState } from "react";
import YoutubeLinkItem from "../components/youtube-link-item";
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
export default function Settings({ navigation }) {
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
    <ScrollView style={styles.container}>
      {/* <View style={styles.settingsSection}> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("AccountProfile")}
        style={styles.settingsTab}
      >
        <Text style={{ fontSize: 18 }}>Account</Text>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        onPress={() => navigation.navigate("DatingFilters")}
        style={styles.settingsTab}
      >
        <Text style={{ fontSize: 18 }}>Dating filters</Text>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
      {/* </View> */}
      {/* <View style={styles.settingsSection}>
        <Text h4 style={styles.header}>
          Account
        </Text>
        <Label label="Name" value="Matt" />
        <Label label="Email" value="something@gmail.com" />
        <Label label="Mobile" value="+1-444-444-4242" />
        <Label label="Date of birth" value="8/31/1994" />
        <Label label="Gender" value="Male" />
      </View>

      <View style={styles.settingsSection}>
        <Text h4 style={styles.header}>
          Filters
        </Text>

        <Label label="Gender preference" value="Female" />
        <Label label="Age range" value="29 - 46" />
      </View> */}
      <View style={styles.settingsSection}>
        <SettingsHeader title="Images" />

        <ImageSelectionGrid />
      </View>
      {/*
      <MultiSlider
        values={multiSliderValue}
        onValuesChange={multiSliderValuesChange}
        min={0}
        max={10}
        step={1}
        snapped
        // minMarkerOverlapDistance={4}
      /> */}

      {/* <Input
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
      /> */}
      <View style={styles.settingsSection}>
        <SettingsHeader title="Youtube videos" />

        {/* <Button
          onPress={toggleOverlay}
          style={styles.button}
          title="Add Youtube link"
          type="clear"
          buttonStyle={{ marginLeft: 0, paddingLeft: 0 }}
        /> */}
        <View style={styles.linksContainer}>
          {linkItems.map((e, i) => {
            return (
              <ListItem
                containerStyle={{ padding: 0 }}
                bottomDivider={i < linkItems.length - 1}
                key={i}
              >
                <YoutubeLinkItem title={e.title} />
              </ListItem>
            );
          })}
        </View>
      </View>
    </ScrollView>
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
