import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import PersonalInfo from "./personal-info";
import Preferences from "./preferences";
import AccountSettings from "./account-settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VideoSelection from "./video-selection";
import ImageSelectionGrid from "./image-selection";
import { ReactElement, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import KeyboardAvoidView from "../keyboard";

const ProfileSettings = ({ navigation }) => {
  return (
    <KeyboardAvoidView>
      {/* <ScrollView style={{ flex: 1 }}> */}
      <PersonalInfo navigation={navigation} />
      <Preferences navigation={navigation} />
      <AccountSettings navigation={navigation} />
      <AccountSettings navigation={navigation} />
      <AccountSettings navigation={navigation} />
      <AccountSettings navigation={navigation} />
      {/* </ScrollView> */}
    </KeyboardAvoidView>
  );
};

const Tab = ({ label, active = false, handleClick }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handleClick}
      style={{
        paddingVertical: 5,
        paddingHorizontal: 20,
        // borderWidth:1,
        borderBottomWidth: active ? 1 : 0,
        borderBottomColor: "#565657",
        // width: 100,
        // backgroundColor: 'lightgrey',
      }}
    >
      <Text
        style={{
          //   width: 50,
          //   borderWidth: 1,
          color: "#565657",
          //   textDecorationLine: 'underline',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export const HeaderTabs = ({ index, setIndex }) => {
  const onClick = (idx) => {
    setIndex(idx);
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        borderRadius: 5,
        zIndex: 10,
        // gap: 10,ss
      }}
    >
      <Tab handleClick={() => onClick(0)} label="YouTube" active={index == 0} />
      <Tab
        handleClick={() => onClick(1)}
        label="Pictures"
        active={index == 1}
      />
      <Tab handleClick={() => onClick(2)} label="Profile" active={index == 2} />
    </View>
  );
};

const ProfileSettingsTabs = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <HeaderTabs index={index} setIndex={setIndex} />
      {index === 0 ? (
        <ProfileSettings navigation={navigation} />
      ) : index === 1 ? (
        <VideoSelection navigation={navigation} />
      ) : (
        <ImageSelectionGrid />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    marginVertical: 15,
    fontSize: 14,
    fontWeight: "700",
    paddingHorizontal: 10,
    color: "#565657",
  },
  settingsContainer: {
    marginTop: 10,
  },
  sectionContainer: {
    backgroundColor: "white",
  },
});

export default ProfileSettingsTabs;
