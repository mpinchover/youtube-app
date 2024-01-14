import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { textState } from "../recoil/test/test";
import { ListItem } from "@rneui/themed";
import { useState } from "react";
import { Link } from "expo-router";
import ChatPreview from "../components/chat-preview";

const chatItems = [{}, {}, {}, {}];

const Stack = createStackNavigator();

export const MessageChat = ({ navigation, route }) => {
  useState(() => {});

  return (
    <View style={styles.container}>
      <Text>Message Chat</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export function Chat(props) {
  const [text, setText] = useRecoilState(textState);

  const { navigation } = props;

  const onPressChatPreview = () => {
    navigation.navigate("MessageChat");
  };

  return (
    <View style={styles.container}>
      {chatItems.map((e, i) => {
        return (
          <ListItem
            containerStyle={{ padding: 0, margin: 0 }}
            bottomDivider={i < chatItems.length - 1}
            key={i}
          >
            <ChatPreview onPressChatPreview={onPressChatPreview} />
          </ListItem>
        );
      })}

      {/* <Text>Message List</Text>
      <StatusBar style="auto" />
      <Text>{text}</Text>
      <Button
        title="Click me"
        onPress={() => navigation.navigate("MessageChat")}
      />
      <Button
        title="Click me to set text"
        onPress={() => setText("New text state")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
