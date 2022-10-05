import { useMemo, useRef } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome5 } from "@expo/vector-icons";
import { SELECT_COLOR } from "../../apiutils/stat";

/**
 * It's a component that renders a bottom sheet with a list of items.
 */
const FootSectionInput = ({
  values,
  selectedIndex,
  onSelect,
  onClose = null,
  isVisible = false,
}) => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => [210], []);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      index={isVisible ? 0 : -1}
      backdropComponent={() =>
        isVisible ? <View style={styles.backdrop}></View> : null
      }
      onClose={onClose}
    >
      <View style={styles.container}>
        {values.map((singleValue, index) => {
          const isCurrent = index === selectedIndex;
          return (
            <Pressable
              key={index}
              style={[
                styles.pressable,
                isCurrent ? styles.pressableChecked : null,
              ]}
              onPress={() => {
                onSelect(index);
                sheetRef.current?.forceClose();
              }}
            >
              <Text
                style={
                  isCurrent ? [styles.text, styles.textChecked] : styles.text
                }
              >
                {singleValue}
              </Text>
              {isCurrent ? (
                <FontAwesome5 name="check" size={18} color="white" />
              ) : null}
            </Pressable>
          );
        })}
      </View>
    </BottomSheet>
  );
};

export default FootSectionInput;

const styles = StyleSheet.create({
  backdrop: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "black",
    opacity: 0.35,
  },
  container: {
    padding: 10,
  },
  pressable: {
    width: "100%",
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  pressableChecked: {
    backgroundColor: SELECT_COLOR,
  },
  text: {},
  textChecked: {
    color: "white",
    marginRight: 10,
  },
});
