import { useEffect, useState } from "react";
import { View, UIManager, TextInput, Keyboard, Animated } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const KeyboardAvoidView = ({ children }) => {
  const { State: TextInputState } = TextInput;
  const [yOffset, setYOffset] = useState(0);
  const tabBarHeight = useBottomTabBarHeight();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      () => {
        runMeasureShow(); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => {
        runMeasureHide(); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const runMeasureHide = () => {
    setYOffset(0);
    console.log("Getting measurements");
    const currentlyFocusedField = TextInputState.currentlyFocusedInput();
    currentlyFocusedField &&
      currentlyFocusedField.measure((fx, fy, width, height, px, py) => {
        console.log("Layout is ", fx, fy, width, height, px, py);
      });
  };

  const runMeasureShow = () => {
    setYOffset(-(tabBarHeight + 200));
    console.log("Getting measurements");
    const currentlyFocusedField = TextInputState.currentlyFocusedInput();
    currentlyFocusedField &&
      currentlyFocusedField.measure((fx, fy, width, height, px, py) => {
        console.log("Layout is ", fx, fy, width, height, px, py);
      });
  };

  return (
    <View
      //   onLayout={() => {
      //     runMeasure();
      //   }}
      style={{
        flex: 1,
        transform: [{ translateX: 0 }, { translateY: yOffset }],
      }}
    >
      {children}
    </View>
  );
};

export default KeyboardAvoidView;
