import { Divider } from '@rneui/base'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Touchable,
  TouchableWithoutFeedback,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Entypo } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SettingsInput = ({ label, value, canEdit = true }) => {
  return (
    <View style={styles.textInput}>
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
            flex: 1,
          }}
        >
          <Text style={{ color: '#565657' }}>{value}</Text>
          <AntDesign
            style={{ position: 'absolute', right: 10 }}
            name='right'
            size={16}
            color='black'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const MatchingFilters = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('SettingsMultipleOptionsScreen')
  }

  return (
    <View>
      <Text style={styles.profileHeader}>Matching filters</Text>
      <View style={styles.sectionContainer}>
        <Divider />
        <SettingsInput label={'Age'} value={'29'} canEdit={false} />
        <Divider />
        <SettingsInput label={'Name'} value={'Matt'} canEdit={false} />
        <Divider />
        <SettingsInput label={'Gender'} value={'Man'} canEdit={false} />
        <Divider />
        <SettingsInputMultipleChoice
          handlePress={handlePress}
          label={'Interested in'}
          value={`Women`}
        />
        <Divider />
        <SettingsInput label={'Height'} value={`5' 10"`} />
        <Divider />
        <SettingsInput label={'Occuptation'} value={`Student`} />
        <Divider />
        <SettingsInput label={'Location'} value={`New York, NY, US`} />
        <Divider />
        <View style={styles.textInput}>
          <Text style={styles.textLabel}> Drugs</Text>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <FontAwesome5
              name='canadian-maple-leaf'
              size={16}
              color='#565657'
            />
            <MaterialCommunityIcons name='mushroom' size={16} color='#565657' />
            <FontAwesome name='coffee' size={16} color='#565657' />
            <FontAwesome5 name='beer' size={16} color='#565657' />
          </View>
          <AntDesign
            style={{ position: 'absolute', right: 10 }}
            name='right'
            size={16}
            color='black'
          />
        </View>
        <Divider />
      </View>
    </View>
  )
}

const AccountSettings = () => {
  return (
    <View>
      <Text style={styles.profileHeader}>Account settings</Text>
      <View style={styles.sectionContainer}>
        <Divider />
        <SettingsInput label={'Email'} value={'test@gmail.com'} />
        <Divider />
        <SettingsInput label={'Password'} value={'*******'} />
        <Divider />
        <SettingsInput label={'Mobile'} value={'+1 (860) 888-8888'} />
        <Divider />

        <Divider />
      </View>
    </View>
  )
}

const MatchingSettings = ({ navigation }) => {
  return (
    <ScrollView>
      <MatchingFilters navigation={navigation} />
      <AccountSettings />
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
  textInput: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 15,
    width: '100%',
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
