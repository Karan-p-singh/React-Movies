import { ENDPOINTS, MOVIE_DB_API_KEY } from "./stat";

/**
 * It takes in an endpoint, a type, a page number, and a query string, and returns a URL that can be
 * used to make a request to the MovieDB API
 * @param endpoint - The endpoint we want to hit.
 * @param type - This is the type of data you want to get from the endpoint. For example, if you want
 * to get the top rated movies, you would pass in "top_rated" as the type.
 * @param [page=1] - The page number of the results you want to get.
 * @param [query=null] - The search query.
 * @returns A function that takes in an endpoint, type, page, and query.
 */
const urlBuild = (endpoint, type, page = 1, query = null) => {
  const lowerCaseEndpoint = endpoint.toLowerCase();
  const typeEndpoint = ENDPOINTS[endpoint.toLowerCase()]?.[type];
  if (!typeEndpoint) {
    throw new Error("Invalid Url Data");
  }
  const queryString = query ? `&query=${encodeURIComponent(query)}` : "";
  return `${lowerCaseEndpoint}/${typeEndpoint}/?api_key=${MOVIE_DB_API_KEY}&page=${page}${queryString}`;
};

export { urlBuild };
