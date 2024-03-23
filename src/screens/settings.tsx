import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Button,
  Text,
} from 'react-native'
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

const linkItems = [
  {
    title: 'How to grow your own candy',
  },
  {
    title: 'Miley Cryus live at the Grand Fox stadium',
  },
  {
    title: 'Best deals of 2023 on Amazon',
  },
  {
    title:
      'Blender hacks for Blender 3.2. How to model like a pro and get your work noticed by the top VFX studios',
  },
  {
    title: 'Halo 2: behind the scenes with the studio',
  },
]

const MatchingSettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Matching settings</Text>
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
                    <AntDesign name='edit' size={20} color='#007AFF' />

                    <Text style={{ color: '#007AFF', fontSize: 18 }}>Edit</Text>
                  </TouchableOpacity>
                )
              },
            }
          }}
          component={ProfilePreviewScreen}
        />
        <Stack.Screen name='Profile' component={AccountSettings} />
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
