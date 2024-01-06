import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";

const img =
  "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const ChatPreview = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={img} contentFit="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Bob</Text>
        <Text numberOfLines={1} style={styles.lastMessage}>
          Hi I just wanted to let you know that I am under the impression
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  textContainer: {
    justifyContent: "center",
    // borderWidth: 1,
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  name: {
    // marginLeft: 10,
    fontWeight: "700",
    marginBottom: 8,
  },
  lastMessage: {
    // marginLeft: 10,
    color: "grey",
  },
});

export default ChatPreview;
