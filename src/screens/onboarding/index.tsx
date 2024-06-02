import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./welcome";
import { profilePreviewScreenConfig } from "../settings/screen-configurations";

const Stack = createStackNavigator();

const Onboarding = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Welcome"
          options={{
            headerShown: false,
          }}
          component={Welcome}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Onboarding;
