import { View, Text, Animated, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

/**
 * This create an animation that will loop and then we use the animation to rotate the icon
 * @returns A view that contains an animated view and a text.
 */
const PageLoader = () => {
  const animation = new Animated.Value(0);

  /* Creating an animation that will loop. */
  Animated.loop(
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    })
  ).start();

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyles = {
    transform: [{ rotate: rotateInterpolate }],
  };
  return (
    <View style={styles.mainContainer}>
      <Animated.View style={[styles.iconContainer, animatedStyles]}>
        <FontAwesome5 name="spinner" size={25} color="black" />
      </Animated.View>
      <Text style={styles.text}>Loading results</Text>
    </View>
  );
};

export default PageLoader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginRight: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
