import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Adjust as necessary
const BOOK_URL = `${API_URL}/book`;

export const fetchBooks = async () => {
  try {
    const response = await axios.get(BOOK_URL);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching books:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};
