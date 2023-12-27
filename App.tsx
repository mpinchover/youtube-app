import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import Screen1 from './src/screens/screen_one';
import Screen2 from './src/screens/screen_two';
import { Chat, MessageChat } from './src/screens/chat';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const getHeaderTitle = (route) => {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  return routeName
}

const MainScreens = ({navigation}) => {

    return <Tab.Navigator>
      <Tab.Screen name="MessageList" component={Chat}/>
      <Tab.Screen name="Settings" component={Screen2} />
    </Tab.Navigator>
}

export default function App() {
  // const [routeName, setRouteName] = useState()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
        screenOptions={({ navigation, route }) => {
          return {
            headerTitle: getHeaderTitle(route)
          }
      }}>
          <Stack.Screen options={({route}) => {
            return {
              // headerTitle:"Something"
              headerTitle: getHeaderTitle(route)
            }
          }} name="MainScreens" component={MainScreens} />
          <Stack.Screen options={({route}) => {

            return {
              headerTitle:"Something" // set it through global state
              // headerTitle: routeName
            }
          }} name="MessageChat" component={MessageChat} />

        </Stack.Group>
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
