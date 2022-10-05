/**
 * It returns the first 10 items of the list if the page is 1, otherwise it returns the last 10 items
 * of the list
 * @param page - The current page number
 * @param list - The full list of data
 */
const getListDataToDisplay = (page, list) =>
  page === 1 ? list.slice(0, 10) : list.slice(10);

export { getListDataToDisplay };
