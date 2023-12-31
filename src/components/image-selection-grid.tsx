import { Image } from "@rneui/base";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ImageSelectionGrid = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: "column",
        rowGap: 20,
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageBox}>
          <Entypo name="image" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageBox}>
          <Entypo name="image" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageBox}>
          <Entypo name="image" size={24} color="grey" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageBox}>
          <Entypo name="image" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageBox}>
          <Entypo name="image" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageBox}>
          <Entypo name="image" size={24} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  imageBox: {
    // borderWidth: 1,
    backgroundColor: "white",
    flex: 0.3,
    // width: "100%",
    // flexGrow: 1,
    // margin: 10,

    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
});

export default ImageSelectionGrid;
