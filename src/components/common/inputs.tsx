import { View, Text, StyleSheet } from "react-native";

interface props {
  label: string;
  value: string;
  canEdit?: boolean;
}
export const SettingsInputEditable = ({ label, value, canEdit }: props) => {
  return (
    <View style={styles.settingsInput}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {/* <AntDesign name="edit" size={20} color="black" /> */}
        {canEdit && <Text>Change</Text>}
      </View>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsInput: {
    padding: 10,
    backgroundColor: "white",
  },
  label: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 4,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
