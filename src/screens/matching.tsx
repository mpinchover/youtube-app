import { View, Text, StyleSheet } from "@bacons/react-views";
import ProfilePreview from "../components/discover/profile-preview";

const Matching = () => {
  return (
    <View style={styles.container}>
      <ProfilePreview></ProfilePreview>
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
});

export default Matching;
