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

const images = [
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWomPds9w5emH_C6RY8xF7KRCJe6I5zwVsuw&usqp=CAU',
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG-0Pc_dX0swJiOnUTf58QaSAwwUTpBUi6Q&usqp=CAU',
  },
  {
    uri: 'https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    uri: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
  },
]

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Matching
