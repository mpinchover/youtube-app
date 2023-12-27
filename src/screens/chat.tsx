import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {useState} from 'react';
import { Link } from 'expo-router';
const Stack = createStackNavigator();


const MessageList = (props) => {

  const showMessageScreen = props.route.params.showMessageScreen
  return (
    <View style={styles.container}>
      <Text>Message List</Text>
      <StatusBar style="auto" />
      {/* <Button title="Click me" onPress={() => navigation.navigate("MessageChat")} /> */}
       <Button title="Click me" onPress={() => showMessageScreen()} />
    </View>
  );
}

export const MessageChat = ({navigation, route}) => {



  useState(() => {
    // route.params.setRouteName("Amy")


  })
  return (
    <View style={styles.container}>
      <Text>Message Chat</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export function Chat(props) {
  const {navigation} = props
  return (
    <View style={styles.container}>
    <Text>Message List</Text>
    <StatusBar style="auto" />
    <Button title="Click me" onPress={() => navigation.navigate("MessageChat")} />
  </View>
  )
}

/*

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
        screenOptions={({ navigation, route }) => {
          console.log("Route is ")
          console.log(getHeaderTitle(route))
          return {
            headerTitle: getHeaderTitle(route)
          }
      }}>
          <Stack.Screen name="MainScreens" component={MainScreens} />
        </Stack.Group>
      </Stack.Navigator>
  </NavigationContainer>
  );
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
