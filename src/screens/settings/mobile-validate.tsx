import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native'
import { Divider } from '@rneui/base'
import { useRecoilState } from 'recoil'
import { ageMinState, ageMaxState } from '../../recoil/settings'

const Mobile = ({ navigation, route }) => {
  const [ageMin, setAgeMin] = useRecoilState(ageMinState)
  const [ageMax, setAgeMax] = useRecoilState(ageMaxState)

  const { mobile } = route.params

  return (
    <View style={{ flex: 1, paddingHorizontal: 10, backgroundColor: 'white' }}>
      <Text style={styles.header}>Enter the code sent to {mobile} </Text>
      <Divider />

      <View style={{ marginTop: 20, position: 'relative' }}>
        <TextInput style={styles.textInput} placeholder='' />
        <Text style={styles.label}>SMS code</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ textAlign: 'center', color: 'white' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    borderColor: '#565657',
  },
  button: {
    marginTop: 25,
    width: '100%',
    // borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: '#565657',
    borderRadius: 5,
    backgroundColor: '#565657',
  },
  label: {
    color: '#565657',
    position: 'absolute',
    top: -8,
    left: 15,
    backgroundColor: 'white',
  },
  header: {
    color: '#565657',
    fontSize: 24,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
})

export default Mobile
