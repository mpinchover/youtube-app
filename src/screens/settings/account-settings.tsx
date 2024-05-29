import { Divider } from "@rneui/base";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { SettingsInput, SettingsInputMultipleChoice } from "./common";

const AccountSettings = ({ navigation }) => {
  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.profileHeader}>Account settings</Text>
      <View style={styles.sectionContainer}>
        <Divider />
        <SettingsInput label={"Email"} value={"test@gmail.com"} />
        <Divider />
        <SettingsInputMultipleChoice
          handlePress={() => {
            navigation.navigate("Mobile");
          }}
          label={"Mobile"}
          value={"+1 (860) 888-8888"}
        />
        <Divider />

        <Divider />
        {/* <SettingsInput label={"Email"} value={"test@gmail.com"} />
        <SettingsInput label={"Email"} value={"test@gmail.com"} />
        <SettingsInput label={"Email"} value={"test@gmail.com"} />
        <SettingsInput label={"Email"} value={"test@gmail.com"} /> */}
      </View>
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
  textInput: {
    paddingHorizontal: 10,
    flexDirection: "row",
    // marginVertical: 15,
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  sectionContainer: {
    backgroundColor: "white",
  },
  textLabel: {
    width: 125,
  },
});

export default AccountSettings;
