import { View, Text, StyleSheet } from "@bacons/react-views";
import { Input } from "@rneui/themed";

const YoutubeVideoSelection = () => {
  return (
    <View style={styles.container}>
      <Input
        containerStyle={styles.inputContainer}
        // inputContainerStyle={{ borderWidth: 1, padding: 0, margin: 0 }}
        style={styles.input}
        // inputStyle={{ padding: 0, margin: 0 }}
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
  },
  inputContainer: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    borderWidth: 1,
  },
  input: {
    padding: 0,
    margin: 0,
  },
});

export default YoutubeVideoSelection;
