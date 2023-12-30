import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { Input, Icon, Text, Button, Overlay, ListItem } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useState } from "react";
import YoutubeLinkItem from "../components/youtube-link-item";

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
  {
    title:
      "Blender hacks for Blender 3.2. How to model like a pro and get your work noticed by the top VFX studios",
  },
  {
    title: "Halo 2: behind the scenes with the studio",
  },
];
export default function Settings() {
  const [visible, setVisible] = useState(true);

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
      <Text h3 style={styles.header}>
        Account
      </Text>
      <Input
        placeholder="Email"
        leftIcon={{ type: "material-icons", name: "email", color: "grey" }}
        inputContainerStyle={styles.inputContainerStyle}
      />
      <Input
        placeholder="Mobile"
        leftIcon={{ type: "material-icons", name: "phone", color: "grey" }}
        inputContainerStyle={styles.inputContainerStyle}
      />
      <Text h3 style={styles.header}>
        Matching
      </Text>

      <Button
        onPress={toggleOverlay}
        style={styles.button}
        title="Add Youtube link"
        type="clear"
      />
      <View>
        <FlatList
          keyExtractor={keyExtractor}
          data={linkItems}
          renderItem={renderItem}
        />

        {linkItems.map((e, i) => {
          return (
            <ListItem key={i} bottomDivider={i < linkItems.length - 1}>
              <YoutubeLinkItem title={e.title} />
            </ListItem>
          );
        })}
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
    // position: "relative",
    // width: "100%",
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
