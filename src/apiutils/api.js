import axios from "axios";
import { MOVIE_DB_API_BASE_URL, MOVIE_DB_API_KEY } from "./stat";
import { urlBuild } from "./urlbuild";

/* Creating a new instance of axios with the baseURL set to the MOVIE_DB_API_BASE_URL. */
const apiRequest = axios.create({
  baseURL: MOVIE_DB_API_BASE_URL,
});

/**
 * It takes in an endpoint, type, page, and query, and returns a listing of movies or tv shows
 * @param endpoint - The endpoint we want to hit.
 * @param type - The type of listing you want to get.
 * @param [page=1] - The page number of the results you want to get.
 * @param [query=null] - The search query.
 * @returns An object with the following properties:
 *   page: 1,
 *   results: [],
 *   total_pages: 0,
 *   total_results: 0,
 */
const getListing = async (endpoint, type, page = 1, query = null) => {
  try {
    const url = urlBuild(endpoint, type, page, query);
    const { data } = await apiRequest.get(url);
    return data;
  } catch (error) {
    console.log({ error });
  }
  return {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
};

/**
 * It takes an id and a type, and returns the data from the API request
 * @param id - The id of the movie or tv show
 * @param type - The type of media you want to search for. This can be either movie or tv.
 * @returns An object with the data from the API request.
 */
const getDetail = async (id, type) => {
  try {
    const url = `${type.toLowerCase()}/${id}?api_key=${MOVIE_DB_API_KEY}`;
    const { data } = await apiRequest.get(url);
    return data;
  } catch (error) {
    console.log({ error });
  }
  return {};
};

export { getListing, getDetail };
