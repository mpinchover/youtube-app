import { View, Text, StyleSheet } from "@bacons/react-views";
import { Input } from "@rneui/themed";

const YoutubeVideoSelection = () => {
  return (
    <View style={styles.container}>
      <Input
        inputContainerStyle={{ padding: 0, margin: 0 }}
        style={styles.input}
        inputStyle={{ padding: 0, margin: 0 }}
        placeholder="Youtube video url"
      />
      <Text>YoutubeVideoSelection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    padding: 0,
    margin: 0,
  },
});

export default YoutubeVideoSelection;
