import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#2c3e50" />
      <View style={styles.headerTitle}>
        <Text>Movies App</Text>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {},
  headerTitle: {
    top: 24,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2c3e50",
  },
});
