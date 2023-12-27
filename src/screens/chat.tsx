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

import { useState } from "react";
import { Link } from "expo-router";
const Stack = createStackNavigator();

const MessageList = (props) => {
  const showMessageScreen = props.route.params.showMessageScreen;
  return (
    <View style={styles.container}>
      <Text>Message List</Text>
      <StatusBar style="auto" />
      {/* <Button title="Click me" onPress={() => navigation.navigate("MessageChat")} /> */}
      <Button title="Click me" onPress={() => showMessageScreen()} />
    </View>
  );
};

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

  return (
    <View style={styles.container}>
      <Text>Message List</Text>
      <StatusBar style="auto" />
      <Text>{text}</Text>
      <Button
        title="Click me"
        onPress={() => navigation.navigate("MessageChat")}
      />
      <Button
        title="Click me to set text"
        onPress={() => setText("New text state")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
