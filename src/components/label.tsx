import { View, Text, StyleSheet } from "react-native";

const Label = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
  },
  label: {
    fontWeight: "500",
    marginRight: 6,
  },
});

export default Label;
