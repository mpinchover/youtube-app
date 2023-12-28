import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RecoilRoot } from "recoil";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen2 from "./src/screens/screen_two";
import { Chat, MessageChat } from "./src/screens/chat";
import Matching from "./src/screens/matching";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  return routeName;
};

const MainScreens = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        let icon;
        if (route.name === "Settings") {
          icon = (
            <MaterialCommunityIcons name="account" size={24} color="black" />
          );
        } else if (route.name === "MessageList") {
          icon = <Entypo name="chat" size={24} color="black" />;
        } else {
          icon = <FontAwesome name="snapchat" size={24} color="black" />;
        }
        return {
          tabBarIcon: ({ focused, color, size }) => {
            console.log("focused is ", focused, route.name);
            if (focused) {
              color = "black";
            } else {
              color = "grey";
            }
            let icon;
            if (route.name === "Settings") {
              icon = (
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color={color}
                />
              );
            } else if (route.name === "MessageList") {
              icon = <Entypo name="chat" size={24} color={color} />;
            } else {
              icon = <FontAwesome name="snapchat" size={24} color={color} />;
            }
            return icon;
          },
          headerShown: false,
          tabBarShowLabel: false,
        };
      }}
    >
      <Tab.Screen name="Matching" component={Matching} />
      <Tab.Screen name="MessageList" component={Chat} />
      <Tab.Screen name="Settings" component={Screen2} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group
            screenOptions={({ navigation, route }) => {
              return {
                headerTitle: getHeaderTitle(route),
              };
            }}
          >
            <Stack.Screen
              options={({ route }) => {
                return {
                  headerTitle: getHeaderTitle(route),
                };
              }}
              name="MainScreens"
              component={MainScreens}
            />
            <Stack.Screen
              options={({ route }) => {
                return {
                  headerTitle: "Something", // set it through global state
                };
              }}
              name="MessageChat"
              component={MessageChat}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
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
