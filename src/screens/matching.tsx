import { View, Text, StyleSheet } from "@bacons/react-views";
import ProfilePreview from "../components/discover/profile-preview";
import { Button } from "@rneui/base";
import { useState, useRef } from "react";
import { Animated, Dimensions } from "react-native";

const profiles = [{}, {}, {}];
const Matching = () => {
  const [profilePreviewIdx, setProfilePreviewIdx] = useState(1);
  const translation = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get("window").width;

  const next = () => {
    setProfilePreviewIdx((prev) => prev + 1);
    Animated.timing(translation, {
      toValue: -profilePreviewIdx * width,
      useNativeDriver: true,
      duration: 300,
    }).start();
  };

  const acceptCandidate = () => {};

  const rejectCandidate = () => {};

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
  },
});

export default Matching;
