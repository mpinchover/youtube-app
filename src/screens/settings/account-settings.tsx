import { Divider } from '@rneui/base'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SettingsInput = ({ label, value, canEdit = true }) => {
  return (
    <View style={[styles.textInput, { marginVertical: 15 }]}>
      <Text style={styles.textLabel}> {label} </Text>
      <TextInput
        style={{ color: canEdit ? '#565657' : 'lightgrey' }}
        editable={canEdit}
        selectTextOnFocus={canEdit}
        value={value}
      />
    </View>
  )
}

const SettingsInputMultipleChoice = ({ label, value, handlePress }) => {
  return (
    <View style={styles.textInput}>
      <Text style={styles.textLabel}> {label} </Text>

      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={handlePress}
          style={{
            // borderWidth: 1,
            paddingVertical: 15,
            flex: 1,
          }}
        >
          <Text style={{ color: '#565657' }}>{value}</Text>
          <AntDesign
            style={{ position: 'absolute', right: 10, top: 15 }}
            name='right'
            size={16}
            color='black'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const ProfileSettings = ({ navigation }) => {
  const handlePress = (screen) => {
    navigation.navigate(screen, {})
  }

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

const AccountSettings = ({ navigation }) => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.profileHeader}>Account settings</Text>
      <View style={styles.sectionContainer}>
        <Divider />
        <SettingsInputMultipleChoice
          handlePress={() => {
            navigation.navigate('Email')
          }}
          label={'Email'}
          value={'test@gmail.com'}
        />
        <Divider />
        {/* <SettingsInputMultipleChoice
          handlePress={() => {}}
          label={'Password'}
          value={'*******'}
        /> */}
        {/* <Divider /> */}
        <SettingsInputMultipleChoice
          handlePress={() => {
            navigation.navigate('Mobile')
          }}
          label={'Mobile'}
          value={'+1 (860) 888-8888'}
        />
        <Divider />

        <Divider />
      </View>
    </View>
  )
}

const MatchingSettings = ({ navigation }) => {
  return (
    <ScrollView>
      <ProfileSettings navigation={navigation} />
      <Preferences navigation={navigation} />
      <AccountSettings navigation={navigation} />
    </ScrollView>
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

export default MatchingSettings
