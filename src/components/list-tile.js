import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BTN_COLOR, MOVIE_DB_API_IMAGE_BASE_URL } from "../apiutils/stat";



/**
 * It's a function that returns a component that displays a list tile
 */
const ListTile = ({ id, title, popularity, date, imageUrl, type }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.listTile}>
      <Image
        style={styles.image}
        /* Setting the source of the image to the imageUrl. */
        source={{
          uri: MOVIE_DB_API_IMAGE_BASE_URL + "w154" + imageUrl,
        }}
      />
      <View style={styles.rightSideContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Popularity: {popularity}</Text>
        <Text style={styles.subtitle}>
          {/* //add realease date for movie/tvshow and birthday for person */}
          {type !== "person" ? `Release Date: ${date}` : " "}
        </Text>
        {/* Release Date: {date || "N/A"}</Text> */}
        <Pressable
          style={styles.button}
          accessibilityLabel="Learn more about this."
          /* Navigating to the Detail screen and passing the id, type, and title as parameters. */
          onPress={() => {
            navigation.navigate("Detail", {
              id,
              type,
              title,
            });
          }}
        >
          <Text style={styles.buttonText}>More Details</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listTile: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    width: 130,
    height: 130,
    marginRight: 10,
  },
  rightSideContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 5,
  },
  subtitle: {
    fontSize: 13,
    color: "#2e2e2e",
    paddingBottom: 5,
  },
  button: {
    width: "85%",
    backgroundColor: BTN_COLOR,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ListTile;
