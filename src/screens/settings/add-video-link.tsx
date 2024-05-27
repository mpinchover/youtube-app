import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const AddVideoLinkeUpload = ({ onPress }) => {
  return (
    <View style={styles.textboxWrapper}>
      <View style={styles.textbox}>
        <TextInput
          style={styles.input}
          placeholder="https://www.youtube.com/asdf8d"
        />
        <TouchableOpacity onPress={onPress} style={styles.btn}>
          <Text style={{ textAlign: "center", color: "white" }}>
            Paste and upload
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress} style={styles.btnCancel}>
          <Text style={{ textAlign: "center", color: "#565657" }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AddVideoLinkeConfirm = ({ navigation }) => {
  const onCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.textboxWrapper}>
      <View style={styles.textbox}>
        <TextInput
          style={styles.input}
          placeholder="https://www.youtube.com/asdf8d"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={{ textAlign: "center", color: "white" }}>
            Looks good
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onCancel} style={styles.btnCancel}>
          <Text style={{ textAlign: "center", color: "white" }}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AddVideoLink = ({ navigation }) => {
  const [imageSrc, setImageSrc] = useState("");
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Upload a youtube video</Text>
      <AddVideoLinkeUpload onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: "#565657",
    borderRadius: 5,
    backgroundColor: "#565657",
  },
  btnCancel: {
    marginTop: 10,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: "#565657",
    borderColor: "#565657",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },
  header: {
    color: "#565657",
    fontSize: 24,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  textboxWrapper: {
    // borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textbox: {
    padding: 10,
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
});

export default AddVideoLink;
