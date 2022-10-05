import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { HEAD_COLOR } from "./src/apiutils/stat";
import AppStack from "./src/navigation/appstack";

export default function App() {
  return (
    <>
      <AppStack />
      <ExpoStatusBar style="light" backgroundColor={HEAD_COLOR} />
    </>
  );
}

const styles = StyleSheet.create({});
