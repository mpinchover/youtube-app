import { View, StyleSheet } from "react-native";
import { Header, Input, Text } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import { Divider } from "@rneui/base";
import { SettingsInputEditable } from "../components/common/inputs";
import { SettingsHeader } from "../components/common/headers";

const AccountProfile = () => {
  return (
    <View>
      <SettingsHeader title="Account profile" />

      <SettingsInputEditable label="Name" value="James" />
      <Divider />
      <SettingsInputEditable label="Email" value="James@gmail.com" canEdit />
      <Divider />
      <SettingsInputEditable label="Mobile" value="+1-860-888-8989" canEdit />
      <Divider />
      <SettingsInputEditable label="I identify as" value="Male" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  settingsInput: {
    padding: 10,
    backgroundColor: "white",
  },
  label: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 4,
  },
  header: {
    padding: 10,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AccountProfile;
