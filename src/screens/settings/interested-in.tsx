import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Divider } from '@rneui/base'
import { useRecoilState } from 'recoil'
import { interestedInState } from '../../recoil/settings'

const InterestedIn = ({ navigation }) => {
  const [interestedIn, setInterestedIn] = useRecoilState(interestedInState)

  const handleSelect = (name) => {
    setInterestedIn(name)
  }

  return (
    <View>
      <Text style={styles.header}>Who are you looking to meet?</Text>
      <Divider />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handleSelect('women')}
        style={styles.option}
      >
        <Text style={styles.optionLabel}>Women</Text>
        <View
          style={interestedIn === 'women' ? styles.activeButton : styles.button}
        ></View>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handleSelect('men')}
        style={styles.option}
      >
        <Text style={styles.optionLabel}>Men</Text>
        <View
          style={interestedIn === 'men' ? styles.activeButton : styles.button}
        ></View>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handleSelect('everyone')}
        style={styles.option}
      >
        <Text style={styles.optionLabel}>Everyone</Text>
        <View
          style={
            interestedIn === 'everyone' ? styles.activeButton : styles.button
          }
        ></View>
      </TouchableOpacity>
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

export default InterestedIn
