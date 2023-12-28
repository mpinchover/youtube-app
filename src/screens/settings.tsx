import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Input, Icon } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>

      <Input
        placeholder="Email"
        leftIcon={{ type: "material-icons", name: "email", color: "grey" }}
      />
      <Input
        placeholder="Mobile"
        leftIcon={{ type: "material-icons", name: "phone", color: "grey" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    border: "black",
    borderWidth: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
