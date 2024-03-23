import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Button,
  Text,
} from 'react-native'
import Constants from 'expo-constants'

import { Input, Icon, Slider, ListItem, Divider, Overlay } from '@rneui/themed'
import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
import { useState } from 'react'
import YoutubeLinkGrid from '../components/youtube-link-grid'
import Label from '../components/label'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import ImageSelectionGrid from '../components/image-selection-grid'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { SettingsHeader } from '../components/common/headers'
import axios from 'axios'
import UploadYoutubeDialogBox from '../components/upload-youtube-dialog-box'
import { createStackNavigator } from '@react-navigation/stack'
import ProfilePreview from '../components/discover/profile-preview'
import AccountSettings from './account-settings'
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

const SettingsOptionsScreens = ({ navigation }) => {
  return (
    <View
      style={
        {
          // paddingTop: Constants.statusBarHeight,
        }
      }
    >
      <Text
        style={{
          color: '#565657',
          fontSize: 24,
          paddingHorizontal: 10,
          marginVertical: 20,
        }}
      >
        Who are you looking to meet?
      </Text>
      <Divider />
      <TouchableOpacity
        style={{
          width: '100%',
          paddingHorizontal: 10,
          paddingVertical: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#565657', fontSize: 16 }}>Women</Text>
        <View
          style={{
            borderColor: '#565657',
            borderWidth: 1,
            width: 20,
            height: 20,
            borderRadius: 50,
            backgroundColor: '#565657',
          }}
        ></View>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={{
          width: '100%',
          paddingHorizontal: 10,
          paddingVertical: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#565657', fontSize: 16 }}>Men</Text>
        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            width: 20,
            height: 20,
            borderRadius: 50,
            backgroundColor: 'lightgrey',
          }}
        ></View>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        style={{
          width: '100%',
          paddingHorizontal: 10,
          paddingVertical: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#565657', fontSize: 16 }}>Everyone</Text>
        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            width: 20,
            height: 20,
            borderRadius: 50,
            backgroundColor: 'lightgrey',
          }}
        ></View>
      </TouchableOpacity>
      <Divider />
    </View>
  )
}

const ProfilePreviewScreen = ({ navigation }) => {
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
          options={({ navigation }) => {
            return {
              headerRight: () => {
                return (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      paddingHorizontal: 10,
                      alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('Profile')}
                  >
                    <Text style={{ color: '#007AFF', fontSize: 14 }}>Edit</Text>
                  </TouchableOpacity>
                )
              },
            }
          }}
          component={ProfilePreviewScreen}
        />
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerLeft: () => {
                return null
              },
              headerRight: () => {
                return (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      paddingHorizontal: 10,
                      alignItems: 'center',
                    }}
                    onPress={() => navigation.goBack()}
                  >
                    <Text style={{ color: '#007AFF', fontSize: 14 }}>Done</Text>
                  </TouchableOpacity>
                )
              },
            }
          }}
          name='Profile'
          component={AccountSettings}
        />
        <Stack.Screen
          options={({ navigation }) => {
            return {
              headerTitle: '',
              headerLeft: () => {
                return (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign
                      style={{ paddingHorizontal: 10 }}
                      name='left'
                      size={16}
                      color='#007AFF'
                    />
                  </TouchableOpacity>
                )
              },
            }
          }}
          name='SettingsMultipleOptionsScreen'
          component={SettingsOptionsScreens}
        />
      </Stack.Group>
    </Stack.Navigator>
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
