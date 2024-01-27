import { View, StyleSheet } from "react-native";
import { Header, Input, Text, Divider } from "@rneui/themed";
import { SettingsInputEditable } from "../components/common/inputs";
import { SettingsHeader } from "../components/common/headers";

const DatingFilters = () => {
  return (
    <View>
      <SettingsHeader title="Matching preferences" />

      <SettingsInputEditable label="I'm interested in" value="Women" />
      <Divider />
      <SettingsInputEditable label="Min age" value="26" canEdit />
      <Divider />
      <SettingsInputEditable label="Max age" value="50" canEdit />
      <Divider />
      <SettingsInputEditable label="Zipcode" value="11200" canEdit />
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
});

export default DatingFilters;
