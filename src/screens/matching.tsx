import { View, Text, StyleSheet } from "@bacons/react-views";
import ProfilePreview from "../components/discover/profile-preview";
import { Button } from "@rneui/base";
import { useState, useRef } from "react";
import { Animated, Dimensions, ActivityIndicator } from "react-native";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { matchingCandidates } from "../recoil/matching/matching";
import axios from "axios";

const Matching = () => {
  const [candidateProfiles, setCandidateProfiles] =
    useRecoilState(matchingCandidates);

  const [profilePreviewIdx, setProfilePreviewIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const translation = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get("window").width;

  const next = async () => {
    // this is the last profile preview that has been loaded up
    if (profilePreviewIdx === candidateProfiles.length - 1) {
      try {
        // set loading screen
        setIsLoading(true);

        // get candidates
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );

        for (let i = 0; i < 100; i++) {
          await axios.get("https://jsonplaceholder.typicode.com/comments");
        }

        // reset values
        translation.setValue(0);
        setProfilePreviewIdx(0);
        setCandidateProfiles([{}, {}, {}]);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    Animated.timing(translation, {
      toValue: -(profilePreviewIdx + 1) * width,
      useNativeDriver: true,
      duration: 300,
    }).start();
    setProfilePreviewIdx((prev) => prev + 1);
  };

  const acceptCandidate = () => {};

  const rejectCandidate = () => {};
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text>Loading candidates</Text>
      </View>
    );
  }
  if (candidateProfiles.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No candidates to show</Text>
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
        {candidateProfiles.map((e, i) => {
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
