// import { useEffect, useRef, useState } from "react";
// import {
//   View,
//   UIManager,
//   TextInput,
//   Keyboard,
//   Animated,
//   KeyboardEvent,
//   Dimensions,
// } from "react-native";
// import { mainNav } from "../settings/settings";
// import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// const KeyboardAvoidView = ({ children }) => {
//   const { State: TextInputState } = TextInput;
//   const BUFFER = 100;
//   const offset = useRef(new Animated.Value(0)).current; // In
//   const scrollViewRef = useRef<any>();
//   const tabBarHeight = useBottomTabBarHeight();
//   // const [distanceToBottom, setDistanceToBottom] = useState(0);
//   const distanceToBottom = useRef(0);
//   const [isKeyboardShowing, setIsKeyboardShowing] = useState(false);

//   const runMeasureShow = (e: KeyboardEvent) => {
//     setIsKeyboardShowing(true);
//     const currentlyFocusedField = TextInputState.currentlyFocusedInput();

//     currentlyFocusedField &&
//       currentlyFocusedField.measure((fx, fy, width, height, px, py) => {
//         const distanceBottomEdgeOfViewFromTop = py + height;
//         const distanceTopOfKeyboardFromTop = e.endCoordinates.screenY;
//         const distanceOfBottomEdgeOfViewFromBottom =
//           Dimensions.get("screen").height - distanceBottomEdgeOfViewFromTop;
//         // console.log("VALUE", distanceOfBottomEdgeOfViewFromBottom);
//         // setDistanceToBottom((prev) => distanceOfBottomEdgeOfViewFromBottom);
//         distanceToBottom.current = distanceOfBottomEdgeOfViewFromBottom;
//         const amountToPushUp =
//           distanceBottomEdgeOfViewFromTop - distanceTopOfKeyboardFromTop;
//         // console.log("Amount to push up", amountToPushUp);

//         // if (distanceOfBottomEdgeOfViewFromBottom - BUFFER < tabBarHeight) {
//         //   scrollViewRef.current.scrollTo({
//         //     x: 0,
//         //     y: currentScrollPosition + 100,
//         //     animated: false,
//         //   });
//         // }

//         if (amountToPushUp > 0) {
//           Animated.timing(offset, {
//             toValue: -(amountToPushUp + BUFFER),
//             duration: 250,
//             useNativeDriver: true,
//           }).start();
//         }

//         if (distanceToBottom.current - tabBarHeight < 50) {
//           // setTimeout(() => {
//           //   // @ts-ignore
//           //   mainNav.setOptions({ tabBarStyle: { display: "none" } });
//           // }, 250);
//         }
//       });
//   };
//   const runMeasureHide = () => {
//     setIsKeyboardShowing(false);
//     // @ts-ignore
//     // mainNav.setOptions({ tabBarStyle: { display: "flex" } });
//     Animated.timing(offset, {
//       toValue: 0,
//       duration: 250,
//       useNativeDriver: true,
//     }).start();

//     // console.log("Distance of bottom edge to bottom", distanceToBottom.current);
//     // if (distanceToBottom.current - tabBarHeight < 100) {
//     //   setTimeout(() => {
//     //     scrollViewRef.current.scrollToEnd({ animated: true });
//     //   }, 450);
//     // }
//   };

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       "keyboardWillShow",
//       (e) => {
//         runMeasureShow(e); // or some other action
//       }
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       "keyboardWillHide",
//       (e) => {
//         runMeasureHide(); // or some other action
//       }
//     );

//     return () => {
//       keyboardDidHideListener.remove();
//       keyboardDidShowListener.remove();
//     };
//   }, []);

//   return (
//     <Animated.ScrollView
//       ref={scrollViewRef}
//       style={{
//         flex: 1,
//         // paddingBottom: 1500,
//         transform: [{ translateX: 0 }, { translateY: offset }],
//       }}
//     >
//       {children}
//       <View
//         style={
//           {
//             // display: isKeyboardShowing ? "flex" : "none",
//             // display:""
//             // height: tabBarHeight,
//             // height: BUFFER,
//           }
//         }
//       ></View>
//     </Animated.ScrollView>
//   );
// };

// export default KeyboardAvoidView;

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
import { mainNav } from "../settings/settings";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const KeyboardAvoidView = ({ children }) => {
  const { State: TextInputState } = TextInput;
  const BUFFER = 100;
  const offset = useRef(new Animated.Value(0)).current; // In
  const scrollViewRef = useRef<any>();
  // const tabBarHeight = useBottomTabBarHeight();
  // const [distanceToBottom, setDistanceToBottom] = useState(0);
  const distanceToBottom = useRef(0);
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
        // console.log("VALUE", distanceOfBottomEdgeOfViewFromBottom);
        // setDistanceToBottom((prev) => distanceOfBottomEdgeOfViewFromBottom);
        distanceToBottom.current = distanceOfBottomEdgeOfViewFromBottom;
        const amountToPushUp =
          distanceBottomEdgeOfViewFromTop - distanceTopOfKeyboardFromTop;
        // console.log("Amount to push up", amountToPushUp);

        // if (distanceOfBottomEdgeOfViewFromBottom - BUFFER < tabBarHeight) {
        //   scrollViewRef.current.scrollTo({
        //     x: 0,
        //     y: currentScrollPosition + 100,
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

        // if (distanceToBottom.current - tabBarHeight < 50) {
        // setTimeout(() => {
        //   // @ts-ignore
        //   mainNav.setOptions({ tabBarStyle: { display: "none" } });
        // }, 250);
        // }
      });
  };
  const runMeasureHide = () => {
    setIsKeyboardShowing(false);
    // @ts-ignore
    // mainNav.setOptions({ tabBarStyle: { display: "flex" } });
    Animated.timing(offset, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();

    // console.log("Distance of bottom edge to bottom", distanceToBottom.current);
    // if (distanceToBottom.current - tabBarHeight < 100) {
    //   setTimeout(() => {
    //     scrollViewRef.current.scrollToEnd({ animated: true });
    //   }, 450);
    // }
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
      style={{
        flex: 1,
        // paddingBottom: 1500,
        transform: [{ translateX: 0 }, { translateY: offset }],
      }}
    >
      {children}
      <View
        style={
          {
            // display: isKeyboardShowing ? "flex" : "none",
            // display:""
            // height: tabBarHeight,
            // height: BUFFER,
          }
        }
      ></View>
    </Animated.ScrollView>
  );
};

export default KeyboardAvoidView;
