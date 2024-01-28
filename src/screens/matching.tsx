import { View, Text, StyleSheet } from "@bacons/react-views";
import ProfilePreview from "../components/discover/profile-preview";
import { Button } from "@rneui/base";
import { useState, useRef } from "react";
import { Animated, Dimensions, ActivityIndicator } from "react-native";
import {
  useRecoilState,
} from "recoil";
import {
  discoverProfiles,
  discoverProfilesIdx,
} from "../recoil/matching/matching";
import axios from "axios";

const Matching = () => {
  const [profiles, setProfiles] = useRecoilState(discoverProfiles);
  const [profileIndex, setProfileIndex] = useRecoilState(discoverProfilesIdx);
  const [isLoading, setIsLoading] = useState(false);

  const translation = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get("window").width;

  const next = async () => {
    if (profileIndex < profiles.length - 1) {
      Animated.timing(translation, {
        toValue: -(profileIndex + 1) * width,
        useNativeDriver: true,
        duration: 300,
      }).start();
      setProfileIndex((prev) => prev + 1);
      return;
    }

    try {
      setIsLoading(true);
      for (let i = 0; i < 20; i++) {
        await axios.get("https://jsonplaceholder.typicode.com/comments");
      }
      setProfiles([{}, {}, {}]);
    } catch (e) {
      setProfiles([]);
    } finally {
      setProfileIndex(0);
      setIsLoading(false);
      translation.setValue(0);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text
          style={{
            marginTop: 10,
          }}
        >
          Loading profiles
        </Text>
      </View>
    );
  }
  if (profiles.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No profiles to show</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          flexDirection: "row",
          height: "100%",
          width: "100%",
          transform: [{ translateX: translation }],
        }}
      >
        {profiles.map((e, i) => {
          return <ProfilePreview key={i} next={next} />;
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Matching;
