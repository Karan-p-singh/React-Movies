import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { INPUT_ICON_COLOR } from "../../apiutils/stat";

const DropDown = ({ title, onPress = undefined, customStyle = {} }) => {
  return (
    <Pressable style={styles.selectDropdownContainer} onPress={onPress}>
      <View
        style={
          !Array.isArray(customStyle)
            ? [styles.selectDropdown, customStyle]
            : [styles.selectDropdown, ...customStyle]
        }
      >
        <Text>{title}</Text>
        <FontAwesome5 name="chevron-down" size={24} color={INPUT_ICON_COLOR} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  selectDropdownContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  selectDropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    width: 300,
    borderColor: "#e6e6e6",
    borderWidth: 2,
    borderRadius: 4,
  },
});

export default DropDown;
