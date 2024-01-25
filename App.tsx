import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RecoilRoot } from "recoil";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen2 from "./src/screens/settings";
import { Chat as ChatScreen, MessageChat } from "./src/screens/chat";
import Matching from "./src/screens/matching";
import AccountProfile from "./src/screens/account-profile";
import DatingFilters from "./src/screens/dating-filters";
import YoutubeVideoSelection from "./src/screens/youtube-video-selection";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppProvider, useAppContext } from "./src/context/stream";
import { useChatClient } from "./src/hooks/useChatClient";
import {
  OverlayProvider,
  Chat,
  Channel,
  ChannelList,
  MessageList,
  MessageInput,
} from "stream-chat-expo"; // Or stream-chat-expo
import { StreamChat } from "stream-chat";
import { chatApiKey, chatUserId } from "./src/config/stream";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const filters = {
  members: {
    $in: [chatUserId],
  },
};

const sort = {
  last_message_at: -1,
};

const ChannelScreen = (props) => {
  const { channel } = useAppContext();
  return (
    // @ts-ignore
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  );
  return null;
};

// tutorial
// https://getstream.io/chat/react-native-chat/tutorial/

const ChannelListScreen = (props) => {
  const { setChannel } = useAppContext();

  return (
    <ChannelList
      // @ts-ignore
      filters={filters}
      // @ts-ignore
      sort={sort}
      onSelect={(channel) => {
        const { navigation } = props;
        setChannel(channel);
        navigation.navigate("ChannelScreen");
      }}
    />
  );
};

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
            } else if (route.name === "Chat") {
              icon = <Entypo name="chat" size={24} color={color} />;
            } else {
              icon = <FontAwesome name="snapchat" size={24} color={color} />;
            }
            return icon;
          },
          headerShown: false,
          // tabBarShowLabel: false,
        };
      }}
    >
      <Tab.Screen name="Matching" component={Matching} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Settings" component={Screen2} />
      <Tab.Screen name="chat-test" component={ChannelListScreen} />
    </Tab.Navigator>
  );
};

// build
console.log("The chat KEY IS");
console.log(chatApiKey);
// @ts-ignore
const chatClient = StreamChat.getInstance(chatApiKey);

export default function App() {
  const { clientIsReady } = useChatClient();

  return (
    <AppProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <RecoilRoot>
            <NavigationContainer>
              <OverlayProvider>
                <Chat client={chatClient}>
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

                      <Stack.Screen
                        options={({ route }) => {
                          return {
                            headerTitle: "Something", // set it through global state
                          };
                        }}
                        name="AccountProfile"
                        component={AccountProfile}
                      />
                      <Stack.Screen
                        options={({ route }) => {
                          return {
                            headerTitle: "Something", // set it through global state
                          };
                        }}
                        name="DatingFilters"
                        component={DatingFilters}
                      />
                      <Stack.Screen
                        options={({ route }) => {
                          return {
                            headerTitle: "YoutubeVideoSelection", // set it through global state
                          };
                        }}
                        name="YoutubeVideoSelection"
                        component={YoutubeVideoSelection}
                      />
                      <Stack.Screen
                        name="ChannelListScreen"
                        component={ChannelListScreen}
                      />
                      <Stack.Screen
                        name="ChannelScreen"
                        component={ChannelScreen}
                      />
                    </Stack.Group>
                  </Stack.Navigator>
                </Chat>
              </OverlayProvider>
            </NavigationContainer>
          </RecoilRoot>
        </SafeAreaView>
      </GestureHandlerRootView>
    </AppProvider>
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
