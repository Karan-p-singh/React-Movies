import { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import PageLoader from "../components/loader";
import { getDetail } from "../apiutils/api";
import { MOVIE_DB_API_IMAGE_BASE_URL } from "../apiutils/stat";

const DetailScreen = ({ route }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getDetail(route.params.id, route.params.type);
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <PageLoader />
      ) : (
        <View style={styles.mainContainer}>
          <Text style={styles.title}>
            {data.title || data.originalName || data.name}
          </Text>
          <Image
            style={styles.image}
            source={{
              uri:
                MOVIE_DB_API_IMAGE_BASE_URL +
                "w154" +
                (data.poster_path || data.profile_path),
            }}
          />
          <Text style={styles.description}>
            {data.overview || data.biography}
          </Text>
          <Text style={styles.stats}>
            Popularity: {data.popularity} |{" "}
            <Text>
              {route.params.type === "person"
                ? "Birthday: " + data.birthday
                : "Release Date: " + data.release_date}
            </Text>
          </Text>
        </View>
      )}
    </ScrollView>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: "fill",
    marginTop: 35,
  },
  description: {
    width: 315,
    marginTop: 25,
    lineHeight: 22,
  },
  stats: {
    width: 315,
    marginTop: 40,
  },
});
