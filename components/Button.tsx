import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

function Button(props: any) {
  return (
    <TouchableOpacity
      style={{
        ...styles.btn,
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
      {props.icon && <Image source={props.icon} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.light.backgroundColor,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    //   marginHorizontal:20,
    borderRadius: 50,
  },
  buttonText: {
    color: Colors.light.textSecondary,
    fontSize: 15,
    fontWeight: "medium",
  },
});

export default Button;
