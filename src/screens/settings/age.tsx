import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Divider } from '@rneui/base'
import { useRecoilState } from 'recoil'
import { interestedInState } from '../../recoil/settings'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const Age = ({ navigation }) => {
  const [interestedIn, setInterestedIn] = useRecoilState(interestedInState)

  const handleSelect = (name) => {
    setInterestedIn(name)
  }

  return (
    <View>
      <Text style={styles.header}>How old are they?</Text>
      <Divider />
      <View style={styles.agesContainer}>
        <Text style={styles.optionLabel}>24</Text>
        <Text style={styles.optionLabel}>to</Text>
        <Text style={styles.optionLabel}>34</Text>
      </View>
      <MultiSlider
        values={[2, 3]}
        sliderLength={310}
        // onValuesChangeStart={sliderOneValuesChangeStart}
        onValuesChange={(values) => {
          console.log(values)
        }}
        // onValuesChangeFinish={sliderOneValuesChangeFinish}
      />
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
  agesContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
  },
  optionLabel: {
    alignSelf: 'flex-start',
    color: '#565657',
    fontSize: 30,
  },
})

export default Age
