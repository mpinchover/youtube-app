import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Text, Button, Overlay } from "@rneui/themed";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useState } from "react";
export default function Settings() {
  const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

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

      <Button
        style={styles.button}
        title="Paste and add Youtube link"
        type="clear"
      />
      <Button
        onPress={toggleOverlay}
        style={styles.button}
        title="Add Youtube link"
        type="clear"
      />
      <Overlay
        style={styles.overlay}
        isVisible={visible}
        onBackdropPress={toggleOverlay}
      >
        <Input
          placeholder="Add youtube link"
          leftIcon={{ type: "ant-design", name: "youtube", color: "grey" }}
          inputContainerStyle={styles.inputContainerStyle}
        />
        <Text style={styles.overlay}>Hello!</Text>
        {/* <Button type="clear" title="Add link" onPress={toggleOverlay} /> */}
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 8,
  },
  overlay: {
    width: Dimensions.get("window").width - 1000,
    justifyContent: "flex-start",
    // position: "relative",
    // width: "100%",
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    width: "100%",
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
