import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RecoilRoot } from "recoil";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./src/screens/settings/settings";
import { MessageChat } from "./src/screens/chat";
import Discover from "./src/screens/discover";
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
    <OverlayProvider>
      <Chat client={chatClient}>
        {/* @ts-ignore */}
        <Channel channel={channel}>
          <MessageList />
          <MessageInput />
        </Channel>
      </Chat>
    </OverlayProvider>
  );
  return null;
};

// tutorial
// https://getstream.io/chat/react-native-chat/tutorial/

const ChannelListScreen = (props) => {
  const { setChannel } = useAppContext();

  return (
    <OverlayProvider>
      <Chat client={chatClient}>
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
      </Chat>
    </OverlayProvider>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  return routeName;
};

const MainScreens = () => {
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
            } else if (route.name === "Messages") {
              icon = <Entypo name="chat" size={24} color={color} />;
            } else if (route.name === "Discover") {
              icon = <Entypo name="magnifying-glass" size={24} color={color} />;
            } else {
              icon = <FontAwesome name="snapchat" size={24} color={color} />;
            }
            return icon;
          },
          headerShown: false,
        };
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Discover"
        component={Discover}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Messages"
        component={ChannelListScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

// build
// @ts-ignore
const chatClient = StreamChat.getInstance(chatApiKey);

// disable the header here and set it for each of the sub nav stacks

export default function App() {
  const { clientIsReady } = useChatClient();

  return (
    <AppProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <RecoilRoot>
            <NavigationContainer>
              <MainScreens />
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
