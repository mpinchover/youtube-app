import { Divider } from '@rneui/base'
import { Text, View, StyleSheet } from 'react-native'
import { SettingsInput } from './common'

const PersonalInfo = ({ navigation }) => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.profileHeader}>Profile</Text>
      <View style={styles.sectionContainer}>
        <Divider />
        <SettingsInput label={'Age'} value={'29'} canEdit={false} />
        <Divider />
        <SettingsInput label={'Name'} value={'Matt'} canEdit={false} />
        <Divider />
        <SettingsInput label={'Gender'} value={'Man'} canEdit={false} />

        <Divider />
        <SettingsInput label={'Height'} value={`5' 10"`} />
        <Divider />
        <SettingsInput label={'Occuptation'} value={`Student`} />
        <Divider />
        <SettingsInput label={'Location'} value={`New York, NY, US`} />
        <Divider />
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
  sectionContainer: {
    backgroundColor: 'white',
  },
})

export default PersonalInfo
