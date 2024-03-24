import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Divider } from '@rneui/base'
import { useRecoilState } from 'recoil'
import { interestedInState } from '../../recoil/settings'

const Medicines = ({ navigation }) => {
  const [interestedIn, setInterestedIn] = useRecoilState(interestedInState)

  const handleSelect = (name) => {
    setInterestedIn(name)
  }

  return (
    <View>
      <Text style={styles.header}>What medicines do you take?</Text>
      <Divider />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: '#565657',
    fontSize: 24,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
  },
  activeButton: {
    borderColor: '#565657',
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: '#565657',
  },
  option: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLabel: { color: '#565657', fontSize: 16 },
})

export default Medicines
