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

const KeyboardAvoidView = ({ children }) => {
  const { State: TextInputState } = TextInput;
  const BUFFER = 0;
  const SCROLL_BUFFER = 30;
  const offset = useRef(new Animated.Value(0)).current; // In
  const scrollViewRef = useRef<any>();
  const distanceToBottom = useRef(0);
  const curScrollPos = useRef(0);
  const didPushUp = useRef(false);
  const [isKeyboardShowing, setIsKeyboardShowing] = useState(false);

  const runMeasureShow = (e: KeyboardEvent) => {
    setIsKeyboardShowing(true);
    const currentlyFocusedField = TextInputState.currentlyFocusedInput();

    currentlyFocusedField &&
      currentlyFocusedField.measure((fx, fy, width, height, px, py) => {
        const distanceBottomEdgeOfViewFromTop = py + height;
        const distanceTopOfKeyboardFromTop = e.endCoordinates.screenY;
        const distanceOfBottomEdgeOfViewFromBottom =
          Dimensions.get("screen").height - distanceBottomEdgeOfViewFromTop;
        distanceToBottom.current = distanceOfBottomEdgeOfViewFromBottom;
        const amountToPushUp =
          distanceBottomEdgeOfViewFromTop - distanceTopOfKeyboardFromTop;

        if (amountToPushUp > 0) {
          didPushUp.current = true;
          Animated.timing(offset, {
            toValue: -(amountToPushUp + BUFFER),
            duration: 250,
            useNativeDriver: true,
          }).start();

          scrollViewRef.current.scrollTo({
            x: 0,
            y: curScrollPos.current + SCROLL_BUFFER,
            animated: true,
          });
        }
      });
  };

  const onScroll = (e) => {
    const yOffset = e.nativeEvent.contentOffset.y;
    curScrollPos.current = yOffset;
  };

  const runMeasureHide = () => {
    setIsKeyboardShowing(false);
    Animated.timing(offset, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();

    if (didPushUp) {
      didPushUp.current = false;
      scrollViewRef.current.scrollTo({
        x: 0,
        y: curScrollPos.current - SCROLL_BUFFER,
        animated: true,
      });
    }
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

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      onScroll={onScroll}
      // onLayout={(e) => {
      //   const layout = e.nativeEvent.layout;
      //   console.log("height:", layout.height);
      //   console.log("width:", layout.width);
      //   console.log("x:", layout.x);
      //   console.log("y:", layout.y);
      // }}
      style={{
        flex: 1,
        transform: [{ translateX: 0 }, { translateY: offset }],
      }}
    >
      {children}
      <View
        style={{
          display: isKeyboardShowing ? "flex" : "none",

          height: SCROLL_BUFFER,
        }}
      ></View>
    </Animated.ScrollView>
  );
};

export default KeyboardAvoidView;
