import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Text, Button } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function Settings() {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.header}>
        Account
      </Text>
      <Input
        placeholder="Email"
        leftIcon={{ type: "material-icons", name: "email", color: "grey" }}
        inputContainerStyle={styles.inputContainerStyle}
      />
      <Input
        placeholder="Mobile"
        leftIcon={{ type: "material-icons", name: "phone", color: "grey" }}
        inputContainerStyle={styles.inputContainerStyle}
      />
      <Text h3 style={styles.header}>
        Matching
      </Text>
      <Input
        placeholder="Add youtube link"
        leftIcon={{ type: "ant-design", name: "youtube", color: "grey" }}
        inputContainerStyle={styles.inputContainerStyle}
      />
      <Button style={styles.button} title="Add Youtube link" type="clear" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 8,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  button: {
    // alignItems: "flex-start",
    // borderWidth: 1,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
