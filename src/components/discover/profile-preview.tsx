import {
  View,
  StyleSheet,
  Dimensions,
  // Text,
  TouchableOpacity,
} from "react-native";
import { ListItem, Text } from "@rneui/themed";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";

const images = [
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWomPds9w5emH_C6RY8xF7KRCJe6I5zwVsuw&usqp=CAU",
  },
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbG-0Pc_dX0swJiOnUTf58QaSAwwUTpBUi6Q&usqp=CAU",
  },
  {
    uri: "https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    uri: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
];

const youtubeItems = [{}, {}, {}];

const YoutubeItem = ({ title }) => {
  return (
    <TouchableOpacity style={styles.youtubeItem}>
      <AntDesign
        style={{ marginRight: 5 }}
        name="youtube"
        size={24}
        color="black"
      />
      <Text style={{ fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
};

const ProfilePreview = ({ next }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImages}>
        <Carousel
          loop
          height={Dimensions.get("window").height * 0.4}
          width={Dimensions.get("window").width}
          // width
          data={images}
          // mode={"parallax"}
          renderItem={({ item }) => {
            return (
              <Image
                contentFit="cover"
                style={styles.image}
                source={item.uri}
              />
            );
          }}
        />
        <View style={styles.nameAgeContainer}>
          <Text style={styles.name}>Danielle Mulberry, </Text>
          <Text style={styles.age}>34</Text>
        </View>
      </View>
      <View>
        <View style={styles.infoHeader}>
          <Text h4>Similar videos Danielle liked</Text>
        </View>

        <View>
          {youtubeItems.map((e, i) => {
            return (
              <ListItem
                bottomDivider={i < youtubeItems.length - 1}
                containerStyle={{ padding: 0, paddingVertical: 10 }}
              >
                <YoutubeItem title="Why grass is green " />
              </ListItem>
            );
          })}
        </View>
      </View>
      <View style={[styles.buttonGroup]}>
        <TouchableOpacity
          onPress={next}
          style={[styles.button, { borderWidth: 1, borderColor: "red" }]}
        >
          <FontAwesome name="remove" size={16} color="red" />
          <Text style={{ color: "red" }}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={next}
          style={[styles.button, { borderWidth: 1, borderColor: "green" }]}
        >
          <Entypo name="check" size={16} color="green" />
          <Text style={{ color: "green" }}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: "relative",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    columnGap: 4,
    backgroundColor: "white",
    width: 100,
  },
  buttonGroup: {
    columnGap: 20,
    position: "absolute",
    bottom: "6%",
    width: Dimensions.get("window").width,
    justifyContent: "center",
    flexDirection: "row",
  },
  youtubeItem: {
    marginBottom: 2,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  nameAgeContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    bottom: 10,
    left: 10,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  age: {
    fontSize: 18,
  },
  profileImages: {
    marginBottom: 10,
  },
  image: {
    flex: 1,
  },
  infoHeader: {
    marginBottom: 4,
    paddingHorizontal: 10,
  },
});

export default ProfilePreview;