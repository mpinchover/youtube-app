import {
  View,
  StyleSheet,
  Dimensions,
  // Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ListItem, Text } from "@rneui/themed";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { MaterialIcons } from '@expo/vector-icons';
import { Divider } from "@rneui/base";

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
        color="red"
      />
      <Text style={{ fontSize: 16 , color: "#565657"}}>{title}</Text>
    </TouchableOpacity>
  );
};

const ProfilePreview = ({ next }) => {
  return (
    <View style={{position:"relative"}}>
    <ScrollView style={styles.container}>
      <View style={styles.profileImages}>
        <Carousel
          loop
          height={Dimensions.get("window").height * 0.5}
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

      </View>
      <View>

        <View style={styles.infoHeader}>
          <View style={{ flexDirection:"row", alignItems:"center"}}>
            <MaterialIcons name="cake" size={16} color="#565657" />
            <Text>29</Text>
          </View>
          <View style={{ flexDirection:"row", alignItems:"center"}}>
          <Entypo name="location-pin" size={16} color="#565657" />
            <Text>Brooklyn, New York</Text>
          </View>

        </View>
        <Divider />


        <View style={styles.similarVideos}>
          <Text style={styles.profileHeader}>Similar videos to you</Text>
          {youtubeItems.map((e, i) => {
            return (
              <ListItem
                // bottomDivider={i < youtubeItems.length - 1}
                key={i}
                containerStyle={{ padding: 0, paddingVertical: 10 }}
              >
                <YoutubeItem title="Why grass is green " />
              </ListItem>
            );
          })}
        </View>

      </View>
      <View style={{height:100}}></View>

    </ScrollView>
    <View style={[styles.buttonGroup]}>
        <TouchableOpacity
          onPress={next}
          style={[styles.button, { borderWidth: 1, borderColor: "grey" }]}
        >
          <FontAwesome name="remove" size={16} color="grey" />
          <Text style={{ color: "grey" }}>No</Text>
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
    // position: "relative",
    // flexGrow:1,
    // padding:200,
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
    // backgroundColor:"transparent"
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
    fontSize: 14,
    fontWeight: "500",
  },
  age: {
    fontSize: 14,
  },
  profileImages: {
    // marginBottom: 10,
  },
  image: {
    flex: 1,
  },
  infoHeader: {
    paddingHorizontal: 10,
    flexDirection:"row",
    gap:10,
    marginVertical:15,
    alignItems:'center'
  },
  location: {
    fontSize: 16,
    fontWeight: "700",
  },
  profileHeader: {
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 10,
    color:"#565657",
  },
  similarVideos: {
    marginVertical:15,
  }
});

export default ProfilePreview;
