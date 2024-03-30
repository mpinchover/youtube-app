import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Button,
  Text,
  Platform,
} from 'react-native'
import Constants from 'expo-constants'

import { Input, Icon, Slider, ListItem, Divider, Overlay } from '@rneui/themed'
import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
import { useState } from 'react'
import YoutubeLinkGrid from '../../components/youtube-link-grid'
import Label from '../../components/label'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import ImageSelectionGrid from '../../components/image-selection-grid'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { SettingsHeader } from '../../components/common/headers'
import axios from 'axios'
import UploadYoutubeDialogBox from '../../components/upload-youtube-dialog-box'
import { createStackNavigator } from '@react-navigation/stack'
import ProfilePreview from '../../components/discover/profile-preview'
import AccountSettings from './account-settings'
import InterestedIn from './interested-in'
import {
  profileScreenConfig,
  profilePreviewScreenConfig,
  optionsScreenConfig,
  optionsScreenMobileValidationConfig,
} from './screen-configurations'
import Age from './age'
import Medicines from './medicines'
import Email from './email'
import Mobile from './mobile'
import MobileValidate from './mobile-validate'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const images = [
  {
    uri: 'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=',
  },
  {
    uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
  },
  {
    uri: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
  },
]

const ProfilePreviewScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0)

  return (
    <View style={styles.container}>
      <ProfilePreview
        navigation={navigation}
        images={images}
        next={() => {}}
        previewMode={true}
      />
      <Button
        title='press me'
        onPress={() => {
          navigation.navigate('MyModal')
        }}
      />
    </View>
  )
}

const Stack = createStackNavigator()

const MainSettingsScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name='Profile preview'
          options={profilePreviewScreenConfig}
          component={ProfilePreviewScreen}
        />
        <Stack.Screen
          options={profileScreenConfig}
          name='Profile'
          component={AccountSettings}
        />
        <Stack.Screen
          options={optionsScreenConfig}
          name='InterestedIn'
          component={InterestedIn}
        />
        <Stack.Screen
          options={optionsScreenConfig}
          name='Age'
          component={Age}
        />
        <Stack.Screen
          options={optionsScreenConfig}
          name='Email'
          component={Email}
        />

        <Stack.Screen
          options={optionsScreenConfig}
          name='Mobile'
          component={Mobile}
        />

        <Stack.Screen
          options={optionsScreenMobileValidationConfig}
          name='MobileValidate'
          component={MobileValidate}
        />

        <Stack.Screen
          options={optionsScreenConfig}
          name='Medicines'
          component={Medicines}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const MainSettings = () => {
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
          headerShown: false,
        }}
        name='Discover'
        component={MainSettingsScreen}
      />
    </Tab.Navigator>
  )
}

export default MainSettingsScreen

const styles = StyleSheet.create({
  settingsTab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    padding: 12,
    backgroundColor: 'white',
  },
  inputStyle: {
    fontSize: 14,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    width: '100%',
  },
  button: {
    alignSelf: 'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 0,
  },
  settingsSection: {
    marginTop: 20,
  },
})
