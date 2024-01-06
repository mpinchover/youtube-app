import { View, Text, StyleSheet } from "@bacons/react-views";

const YoutubeVideoSelection = () => {
  return (
    <View style={styles.container}>
      <Text>YoutubeVideoSelection</Text>
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

export default YoutubeVideoSelection;
