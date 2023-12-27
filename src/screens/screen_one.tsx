import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Link } from 'expo-router';


const Stack = createStackNavigator();

const Stack1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Stack 1</Text>
      <StatusBar style="auto" />
      <Button title="Click me" onPress={() => navigation.navigate("Stack2")}></Button>
      {/* <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link> */}
    </View>
  );
}

const Stack2 = () => {
  return (
    <View style={styles.container}>
      <Text>Stack 2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function Screen1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stack1" component={Stack1} />
      <Stack.Screen name="Stack2" component={Stack2} />
    </Stack.Navigator>
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
