import { View, Text, Animated, Keyboard } from "react-native";
import { useRef, useEffect } from "react";

const TabBar = ({ state, descriptors, navigation }) => {
  const heightOffset = useRef(new Animated.Value(0)).current; // In

  const onKeyboardShow = (e) => {
    Animated.timing(heightOffset, {
      toValue: 100,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const onKeyboardHide = () => {
    Animated.timing(heightOffset, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (e) => {
        onKeyboardShow(e); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      (e) => {
        onKeyboardHide(); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: 0 }, { translateY: heightOffset }],
        backgroundColor: "red",
        height: 100,
      }}
    >
      <Text>Tab bar</Text>
    </Animated.View>
  );
};

export default TabBar;
