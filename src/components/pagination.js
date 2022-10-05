import { Text, View, StyleSheet, Pressable } from "react-native";
import { SELECT_COLOR } from "../apiutils/stat";

/**
 * It renders a button to go to the previous page if the current page is greater than 1, a button to go
 * to the next page if the current page is less than the total number of pages, and the current page
 * number in the middle
 * @returns A component that renders a pagination bar.
 */
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <View style={styles.container}>
      {currentPage > 1 ? (
        <Pressable
          style={styles.button}
          onPress={() => {
            onPageChange(currentPage - 1);
          }}
        >
          <Text style={styles.buttonText}>&lt; Previous</Text>
        </Pressable>
      ) : null}
      <Text style={styles.currentPage}>{currentPage}</Text>
      {Math.min(totalPages, 2) <= currentPage ? null : (
        <Pressable
          style={styles.button}
          onPress={() => {
            onPageChange(currentPage + 1);
          }}
        >
          <Text style={styles.buttonText}>Next &gt;</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 20,
  },
  button: {
    width: 100,
    alignItems: "center",
    padding: 10,
    backgroundColor: SELECT_COLOR,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
  },
  currentPage: {
    backgroundColor: SELECT_COLOR,
    height: "100%",
    textAlignVertical: "center",
    padding: 10,
    borderRadius: 5,
    color: "white",
  },
});
