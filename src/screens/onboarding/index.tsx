import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Onboarding = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Profile preview"
          //   options={profilePreviewScreenConfig}
          //   component={ProfilePreviewScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
