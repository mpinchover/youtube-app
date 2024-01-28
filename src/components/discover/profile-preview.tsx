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
import * as Linking from "expo-linking";

const images = [
  {
    uri: "https://m.media-amazon.com/images/M/MV5BZGM0YjhkZmEtNGYxYy00OTk0LThlNDgtNGQzM2YwNjU0NDQzXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_.jpg",
  },
  {
    uri: "https://variety.com/wp-content/uploads/2023/12/taylor-swift.jpg?w=1000",
  },
  {
    uri: "https://www.billboard.com/wp-content/uploads/2023/12/taylor-swift-eras-foxborough-2023-billboard-1548.jpg?w=942&h=623&crop=1",
  },
  {
    uri: "https://s.yimg.com/ny/api/res/1.2/gdF2yTOF3QYV9F4zY.79Fw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTgwNw--/https://media.zenfs.com/en/theblast_73/2c5f1b11ea5bbecbb4547795f385944c",
  },
];

const youtubeItems = [
  {
    title: "Tuning a Guitar - Standard tuning for 6 string guitar",
    linkPath: "watch?v=jJxRjWtwmEE",
  },
  {
    title: "Halo 2 Classic Multiplayer Gameplay (4v4 Slayer on Ivory Tower)",
    linkPath: "watch?v=nk9b5G8q9BQ",
  },
  {
    title:
      "NASA's Stunning Discoveries on Jupiter's Largest Moons | Our Solar System's Moons Supercut",
    linkPath: "watch?v=Xo6w5QVrABc",
  },
];

const YoutubeItem = ({ title, linkPath }) => {
  const handleOnPress = () => {
    Linking.canOpenURL(`vnd.youtube://${linkPath}`).then((supported) => {
      if (supported) {
        return Linking.openURL(`vnd.youtube://${linkPath}`);
      } else {
        return Linking.openURL(`https://www.youtube.com/${linkPath}`);
      }
    });
  };
  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.youtubeItem}>
      <AntDesign
        style={{ marginRight: 5 }}
        name="youtube"
        size={24}
        color="red"
      />
      <Text numberOfLines={1} style={{ fontSize: 14, flex: 1 }}>
        {title}
      </Text>
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
              <View style={styles.carouselItem}>
                <Image
                  contentFit="contain"
                  style={styles.image}
                  source={item.uri}
                />
              </View>
            );
          }}
        />
        <View style={styles.nameAgeContainer}>
          <Text style={styles.name}>Taylor Swift, </Text>
          <Text style={styles.age}>34</Text>
        </View>
      </View>
      <View>
        <View style={styles.infoHeader}>
          <Text style={styles.infoHeaderText}>Similar videos Taylor liked</Text>
        </View>

        <View>
          {youtubeItems.map((e, i) => {
            return (
              <ListItem
                bottomDivider={i < youtubeItems.length - 1}
                key={i}
                containerStyle={{ padding: 0, paddingVertical: 10 }}
              >
                <YoutubeItem linkPath={e.linkPath} title={e.title} />
              </ListItem>
            );
          })}
        </View>
      </View>
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
    position: "relative",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // padding: 30,
    // paddingHorizontal: 40,
    justifyContent: "center",
    columnGap: 4,
    backgroundColor: "white",
    width: 150,
    height: 75,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonGroup: {
    columnGap: 20,
    position: "absolute",
    bottom: "10%",
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
    backgroundColor: "rgba(255, 255, 255, 1)",
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
    // width: "50%",
    // height: "100%",
    flex: 1,
    // aspectRatio: 1,
    // resizeMode: "cover",
    // ...StyleSheet.absoluteFillObject,
    // height: "100%",
    // width: 200,
  },
  infoHeader: {
    marginBottom: 4,
    paddingHorizontal: 10,
  },
  infoHeaderText: {
    fontSize: 16,
    fontWeight: "700",
  },
  carouselItem: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default ProfilePreview;
