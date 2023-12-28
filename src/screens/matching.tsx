import { View, Text, StyleSheet } from "@bacons/react-views";

const Matching = () => {
  return (
    <View style={styles.container}>
      <Text>Matching</Text>
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

export default Matching;
