import { Divider } from '@rneui/base'
import { SettingsInputMultipleChoice } from './common'
import { View, Text, StyleSheet } from 'react-native'

const Preferences = ({ navigation }) => {
  const handlePress = (screen) => {
    navigation.navigate(screen, {})
  }

  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.profileHeader}>Preferences</Text>
      <View style={styles.sectionContainer}>
        <Divider />
        <SettingsInputMultipleChoice
          handlePress={() => handlePress('InterestedIn')}
          label={'Interested in'}
          value={`Women`}
        />
        <Divider />
        <SettingsInputMultipleChoice
          handlePress={() => handlePress('Age')}
          label={'Age'}
          value={`21 to 24`}
        />
        <Divider />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileHeader: {
    marginVertical: 15,
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 10,
    color: '#565657',
  },
  settingsContainer: {
    marginTop: 10,
  },
  textInput: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    // marginVertical: 15,
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  sectionContainer: {
    backgroundColor: 'white',
  },
  textLabel: {
    width: 125,
  },
})

export default Preferences
