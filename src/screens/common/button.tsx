import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({
  containerStyle = {},
  onPress,
  title,
  type = "primary",
}) => {
  const buttonOverrides: any = {};
  const textOverrides: any = {};

  if (type === "secondary") {
    buttonOverrides.backgroundColor = "white";
    buttonOverrides.borderColor = "#a2a2a2";
    buttonOverrides.borderWidth = 1;
    textOverrides.color = "#565657";
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, containerStyle, buttonOverrides]}
    >
      <Text style={[styles.text, textOverrides]}>{title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "white",
  },
  button: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    color: "#565657",
    borderRadius: 5,
    backgroundColor: "#565657",
  },
});
