import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Divider } from '@rneui/base'
import { useRecoilState } from 'recoil'
import { ageMinState, ageMaxState } from '../../recoil/settings'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { Dimensions } from 'react-native'
import { useState } from 'react'

const Age = ({ navigation }) => {
  const [ageMin, setAgeMin] = useRecoilState(ageMinState)
  const [ageMax, setAgeMax] = useRecoilState(ageMaxState)

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>How old are they?</Text>
      <Divider />
      <View style={styles.container}>
        <View style={styles.agesContainer}>
          <Text style={styles.optionLabel}>{ageMin}</Text>
          <Text style={styles.optionLabel}>to</Text>
          <Text style={styles.optionLabel}>{ageMax}</Text>
        </View>
        {/* <View style={{ width: '100%' }}> */}
        <MultiSlider
          // containerStyle={{ borderWidth: 1, width: '100%' }}
          values={[ageMin, ageMax]}
          sliderLength={Dimensions.get('window').width - 60}
          step={1}
          max={100}
          min={4}
          snapped={true}
          // onValuesChangeStart={sliderOneValuesChangeStart}
          onValuesChange={(values) => {
            setAgeMin(values[0])
            setAgeMax(values[1])
          }}
          // onValuesChangeFinish={sliderOneValuesChangeFinish}
        />
        {/* </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    // alignSelf: 'flex-start',
    color: '#565657',
    fontSize: 30,
    // width: 40,
    textAlign: 'center',
  },
})

export default Age
