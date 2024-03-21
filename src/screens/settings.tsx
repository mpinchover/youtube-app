import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ScrollView, FlatList, Button } from 'react-native'
import {
  Input,
  Icon,
  Text,
  Slider,
  ListItem,
  Divider,
  Overlay,
} from '@rneui/themed'
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
// export default function Settings({ navigation }) {
//   const [visible, setVisible] = useState(false);
//   const [multiSliderValue, setMultiSliderValue] = useState([3, 7]);
//   const [youtubeUrl, setYoutubeUrl] = useState("");
//   const [youtubeUploadError, setYoutubeUploadError] = useState("");
//   const [isUploadingYoutubeUrl, setIsUploadingYoutubeUrl] = useState(false);
// const [youtubeBackgrounds, setYoutubeBackgrounds] = useState({});

// const toggleOverlay = () => {
//   setVisible(!visible);
//   setYoutubeUrl("");
// };

// const selectVideoForUpload = () => {
//   toggleOverlay();
// };

// const handleUploadYoutubeUrl = async (youtubeURL, idx) => {
//   if (!validateYoutubeUrl(youtubeURL)) {
//     setYoutubeUploadError("This youtube url doesn't look right, try again");
//     return;
//   }
//   setIsUploadingYoutubeUrl(true);

//   try {
//     for (let i = 0; i < 30; i++) {
//       await axios.get("https://jsonplaceholder.typicode.com/comments");
//     }
//     setYoutubeBackgrounds((prev) => {
//       return {
//         ...prev,
//         idx: youtubeURL,
//       };
//     });
//   } catch (e) {
//     console.log(e);
//   } finally {
//     setIsUploadingYoutubeUrl(false);
//   }
// };

// function validateYoutubeUrl(url) {
//   // const regex = /^https:\/\/www\.youtube\.com(\/.*)?$/;
//   // return regex.test(url.toLowerCase());
//   return url.toLowerCase().startsWith("https://www.youtube.com");
// }

/**
 *
 *
 * for a modal  <Stack.Group screenOptions={{presentation:'transparentModal'}}>
 * you need to create stack navigator
 *
 *
 */

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
                    }}
                    onPress={() => navigation.navigate('MatchingSettings')}
                  >
                    <AntDesign name='edit' size={16} color='blue' />

                    <Text style={{ color: 'blue' }}>Edit profile</Text>
                  </TouchableOpacity>
                )
              },
            }
          }}
          component={ProfilePreviewScreen}
        />
        <Stack.Screen
          name='MatchingSettings'
          component={MatchingSettingsScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

// const Settings = ({ navigation }) => {
//   const [visible, setVisible] = useState(false)
//   const [multiSliderValue, setMultiSliderValue] = useState([3, 7])
//   const [youtubeUrl, setYoutubeUrl] = useState('')
//   const [youtubeUploadError, setYoutubeUploadError] = useState('')
//   const [isUploadingYoutubeUrl, setIsUploadingYoutubeUrl] = useState(false)

//   return (
//     <ScrollView style={styles.container}>
//       <Button title='done' onPress={() => navigation.goBack()} />
//       <TouchableOpacity
//         onPress={() => navigation.navigate('AccountProfile')}
//         style={styles.settingsTab}
//       >
//         <Text style={{ fontSize: 16 }}>Account</Text>
//         <AntDesign name='right' size={24} color='black' />
//       </TouchableOpacity>
//       <Divider />
//       <TouchableOpacity
//         onPress={() => navigation.navigate('DatingFilters')}
//         style={styles.settingsTab}
//       >
//         <Text style={{ fontSize: 16 }}>Dating filters</Text>
//         <AntDesign name='right' size={24} color='black' />
//       </TouchableOpacity>

//       <View style={styles.settingsSection}>
//         <SettingsHeader title='Images' />

//         <ImageSelectionGrid />
//       </View>
//       <View style={styles.settingsSection}>
//         <SettingsHeader title='Youtube videos' />
//         <YoutubeLinkGrid />
//       </View>
//     </ScrollView>
//   )
// }
// const RootStack = createStackNavigator()

export default MainSettingsScreen

const styles = StyleSheet.create({
  header: {
    // padding: 8,
  },
  settingsTab: {
    // fontSize: 18,
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    padding: 12,
    backgroundColor: 'white',
    // marginBottom: 10,
  },
  // overlay: {
  //   width: Dimensions.get("window").width - 1000,
  //   justifyContent: "flex-start",
  // },
  inputStyle: {
    fontSize: 14,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    // paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    // alignItems: "flex-start",
    // borderWidth: 1,
    alignSelf: 'flex-start',
    // padding: 0,
    // margin: 0,
    // marginLeft: 10,
  },
  linksContainer: {
    // paddingBottom: 100,
  },
  container: {
    flex: 1,
    // backgroundColor: "#f5f5f5",
    backgroundColor: 'white',
    borderRadius: 0,
    // borderWidth:1,
    // borderColor:"red",
    // alignItems: "center",
    // justifyContent: "center",
  },
  settingsSection: {
    // marginBottom: 4,
    marginTop: 20,
    // paddingHorizontal: 10,
  },
})
