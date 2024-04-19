import axios from "axios";
import { setPhotos } from "../features/photosSlice";

// Base url used to interact with the back-end:
const BASE_URL = "http://localhost:8000/api";

export const fetchDataForPage = async (page, dispatch) => {
  try {
    // API request to fetch (get) data for the specified page
    const res = await axios.get(`${BASE_URL}/photos?page=${page}`);
    const data = res.data;

    // Dispatch to update the Redux state with the fetched data
    dispatch(setPhotos(data));
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchDataWithSorting = async (category, sortBy, dispatch) => {
  try {
    // API request to fetch (get) sorted data for the specific category
    const res = await axios.get(
      `${BASE_URL}/sorting/sortedPhotos?category=${category}&sort=${sortBy}`
    );
    const data = res.data;
    // Dispatch to update the Redux state with the fetched data
    dispatch(setPhotos(data));
  } catch (error) {
    console.error("Error fetching sorted data:", error);
  }
};
