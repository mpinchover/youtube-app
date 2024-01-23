import { View, StyleSheet } from "react-native";
import { Header, Input, Text } from "@rneui/themed";

export const SettingsHeader = ({ title }) => {
  return (
    <Text style={styles.header} h4>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
  },
});
