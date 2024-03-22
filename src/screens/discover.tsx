import { View, Text, StyleSheet } from '@bacons/react-views'
import ProfilePreview from '../components/discover/profile-preview'
import { Button } from '@rneui/base'
import { useState, useRef } from 'react'
import { Animated, Dimensions, ActivityIndicator } from 'react-native'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'
import { matchingCandidates } from '../recoil/matching/matching'
import axios from 'axios'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const images = [
  {
    uri: 'https://m.media-amazon.com/images/M/MV5BZGM0YjhkZmEtNGYxYy00OTk0LThlNDgtNGQzM2YwNjU0NDQzXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_.jpg',
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_R_-4WZucf8KtbGVAjN6o0-Gl7Ukj3Om85y81PDYV_w&s',
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUPxnJnJLTOmmZxXglLzaiwdYPYGdSU06JvJLkf6JOQ&s',
  },
]

const Stack = createStackNavigator()
const Matching = ({ navigation }) => {
  const [candidateProfiles, setCandidateProfiles] =
    useRecoilState(matchingCandidates)

  const [profilePreviewIdx, setProfilePreviewIdx] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const translation = useRef(new Animated.Value(0)).current
  const width = Dimensions.get('window').width

  const next = async () => {
    // this is the last profile preview that has been loaded up
    if (profilePreviewIdx === candidateProfiles.length - 1) {
      try {
        // set loading screen
        setIsLoading(true)

        // get candidates
        const result = await axios.get(
          'https://jsonplaceholder.typicode.com/comments'
        )

        for (let i = 0; i < 100; i++) {
          await axios.get('https://jsonplaceholder.typicode.com/comments')
        }

        // reset values
        translation.setValue(0)
        setProfilePreviewIdx(0)
        setCandidateProfiles([{}, {}, {}])
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
      return
    }

    Animated.timing(translation, {
      toValue: -(profilePreviewIdx + 1) * width,
      useNativeDriver: true,
      duration: 300,
    }).start()
    setProfilePreviewIdx((prev) => prev + 1)
  }

  const acceptCandidate = () => {}

  const rejectCandidate = () => {}
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text>Loading candidates</Text>
      </View>
    )
  }
  if (candidateProfiles.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No candidates to show</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          flexDirection: 'row',
          height: '100%',
          width: '100%',
          transform: [{ translateX: translation }],
        }}
      >
        {candidateProfiles.map((e, i) => {
          return (
            <ProfilePreview
              navigation={navigation}
              images={images}
              key={i}
              next={next}
            />
          )
        })}
      </Animated.View>
    </View>
  )
}

const MatchingSCreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name='Discover' component={Matching} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MatchingSCreen
