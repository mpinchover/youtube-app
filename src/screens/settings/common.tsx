import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
export const SettingsInput = ({ label, value, canEdit = true }) => {
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

export const SettingsInputMultipleChoice = ({ label, value, handlePress }) => {
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

const Tab = ({ label, active = false }) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 5,
        paddingHorizontal: 20,
        // borderWidth:1,
        borderBottomWidth: active ? 1 : 0,
        borderBottomColor: '#565657',
        // width: 100,
        // backgroundColor: 'lightgrey',
      }}
    >
      <Text
        style={{
          //   width: 50,
          //   borderWidth: 1,
          color: '#565657',
          //   textDecorationLine: 'underline',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
export const HeaderTabs = () => {
  const [index, setIndex] = useState(0)
  return (
    <View
      style={{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        // gap: 10,ss
      }}
    >
      <Tab label='YouTube' active />
      <Tab label='Pictures' />
      <Tab label='Profile' />
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
