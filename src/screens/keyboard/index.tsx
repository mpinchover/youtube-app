import { useEffect, useRef, useState } from "react";
import {
  View,
  UIManager,
  TextInput,
  Keyboard,
  Animated,
  KeyboardEvent,
  Dimensions,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const KeyboardAvoidView = ({ children }) => {
  const { State: TextInputState } = TextInput;
  const BUFFER = 40;
  const offset = useRef(new Animated.Value(0)).current; // In
  const scrollViewRef = useRef<any>();
  const tabBarHeight = useBottomTabBarHeight();
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const onScroll = (event) => {
    setCurrentScrollPosition(event.nativeEvent.contentOffset.y);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (e) => {
        runMeasureShow(e); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      (e) => {
        runMeasureHide(); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const runMeasureHide = () => {
    Animated.timing(offset, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const runMeasureShow = (e: KeyboardEvent) => {
    const currentlyFocusedField = TextInputState.currentlyFocusedInput();

    currentlyFocusedField &&
      currentlyFocusedField.measure((fx, fy, width, height, px, py) => {
        const distanceBottomEdgeOfViewFromTop = py + height;
        const distanceTopOfKeyboardFromTop = e.endCoordinates.screenY;
        const distanceOfBottomEdgeOfViewFromBottom =
          Dimensions.get("screen").height - distanceBottomEdgeOfViewFromTop;

        console.log(
          "Distance of bottom edge of view from bottom",
          distanceOfBottomEdgeOfViewFromBottom
        );
        console.log("Tab bar height ", tabBarHeight);
        console.log(
          "Distance from bottom edge of view to top",
          distanceBottomEdgeOfViewFromTop
        );
        console.log(
          "Distance from top edge of kb to top",
          distanceTopOfKeyboardFromTop
        );

        const amountToPushUp =
          distanceBottomEdgeOfViewFromTop - distanceTopOfKeyboardFromTop;
        console.log("Amount to push up", amountToPushUp);
        // if (distanceOfBottomEdgeOfViewFromBottom - BUFFER < tabBarHeight) {
        //   scrollViewRef.current.scrollTo({
        //     x: 0,
        //     y: currentScrollPosition - 100,
        //     animated: false,
        //   });
        // }

        if (amountToPushUp > 0) {
          Animated.timing(offset, {
            toValue: -(amountToPushUp + BUFFER),
            duration: 250,
            useNativeDriver: true,
          }).start();
        }
      });
  };

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      onScroll={onScroll}
      scrollEventThrottle={20}
      style={{
        flex: 1,
        // paddingBottom: 1500,
        transform: [{ translateX: 0 }, { translateY: offset }],
      }}
    >
      {children}
    </Animated.ScrollView>
  );
};

export default KeyboardAvoidView;
