import { StyleSheet, Text, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TextBox({ icon, placeholder }) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={24} color="#E7B811" />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={"#E7B811"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#E7B811",
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  textInput: {
    width: "60%",
  },
});
