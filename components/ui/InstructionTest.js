import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionTest({ children, style }) {
  return <Text style={[styles.instructionTest, style]}>{children}</Text>;
}

export default InstructionTest;

const styles = StyleSheet.create({
  instructionTest: {
    color: Colors.accent500,
    fontSize: 25,
  },
});
