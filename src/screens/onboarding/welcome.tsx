import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import { Button } from "../common/button";
import { useEffect, useRef } from "react";

const prompts = [
  "weird space videos",
  "do beans make you fart?",
  "pizza recipes at 2AM",
  "elephant chasing butterflies",
  "Maroon 5 Sugar cover",
  "VR tours of Denmark",
  "how to make funny hats",
  "Logic pro tutorials",
  "how to shuffle like a pro",
  "what asteroids are made of",
];

const LOGO_PATH = "../../assets/logo.png";
const Welcome = () => {
  const textOffset = useRef(new Animated.Value(0)).current;

  const numOffsets = useRef(1);
  const screenWidth = Dimensions.get("screen").width;

  useEffect(() => {
    // const interval = setInterval(() => {
    //   const textOffsetValue = Number.parseInt(JSON.stringify(textOffset));
    //   Animated.timing(textOffset, {
    //     toValue: textOffsetValue - numOffsets.current * screenWidth,
    //     useNativeDriver: true,
    //     duration: 300,
    //   }).start();
    //   if (numOffsets.current === prompts.length - 1) {
    //     numOffsets.current = 1;
    //   } else {
    //     numOffsets.current = numOffsets.current + 1;
    //   }
    // }, 4000);
    // return clearInterval(interval);

    const sequences = prompts.reduce((acc: any, _, i) => {
      acc.push(
        Animated.delay(3000),
        Animated.timing(textOffset, {
          toValue: -(i + 1) * screenWidth,
          duration: 250,
          useNativeDriver: true,
          //   easing: Easing.linear,
        })
      );
      return acc;
    }, []);

    Animated.loop(Animated.sequence(sequences)).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ position: "relative", flex: 1, alignItems: "center" }}>
        <Image
          style={{ height: 200, width: 200, marginTop: 100 }}
          source={require(LOGO_PATH)}
        />
        <Text style={{ fontSize: 30 }}>YoutubeDating</Text>
        <Text style={{ fontSize: 20, marginTop: 10 }}>
          Meet someone who also watches
        </Text>
        <Animated.View
          style={{
            // alignItems: "center",

            flexDirection: "row",
            width: "100%",
            transform: [{ translateX: textOffset }, { translateY: 0 }],
          }}
        >
          {prompts.map((e, i) => {
            return (
              <Text
                key={i}
                style={{
                  textAlign: "center",
                  width: screenWidth,
                  alignItems: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {e}
              </Text>
            );
          })}
        </Animated.View>

        <View
          style={{
            position: "absolute",
            width: "100%",
            paddingHorizontal: 20,
            bottom: 0,
            marginBottom: 50,
          }}
        >
          <Button
            containerStyle={{ marginBottom: 10 }}
            type="secondary"
            onPress={() => {}}
            title="Sign up"
          />

          <Button onPress={() => {}} title="Log in" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
