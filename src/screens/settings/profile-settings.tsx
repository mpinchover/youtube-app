import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import PersonalInfo from './personal-info'
import Preferences from './preferences'
import AccountSettings from './account-settings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VideoSelection from './video-selection'
import { HeaderTabs } from './common'

const ProfileSettings = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior='position'
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <ScrollView>
        <PersonalInfo navigation={navigation} />
        <Preferences navigation={navigation} />
        <AccountSettings navigation={navigation} />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const Tab = createBottomTabNavigator()
const ProfileSettingsTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarStyle: { display: 'none' },
        }
      }}
    >
      <Tab.Screen
        options={{
          header: () => {
            return (
              <View>
                <HeaderTabs />
              </View>
            )
          },
          headerShown: true,
        }}
        name='ProfileSettings'
        component={ProfileSettings}
      />

      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name='VideoSelection'
        component={VideoSelection}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  profileHeader: {
    marginVertical: 15,
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 10,
    color: '#565657',
  },
  settingsContainer: {
    marginTop: 10,
  },
  sectionContainer: {
    backgroundColor: 'white',
  },
})

export default ProfileSettingsTabs
