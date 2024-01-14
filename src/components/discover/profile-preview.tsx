import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";
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
const ProfilePreview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImages}>
        <Carousel
          loop
          height={Dimensions.get("window").height / 2}
          width={Dimensions.get("window").width}
          data={images}
          mode={"parallax"}
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
        <Text>Daniel Mulberry</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  profileImages: {},
  image: {
    flex: 1,
  },
});

export default ProfilePreview;
