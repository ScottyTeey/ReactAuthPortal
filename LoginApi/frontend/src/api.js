import axios from 'axios';

// Define the base URL for the API
const BASE_URL = 'https://localhost:7088/api/Auth'; // Replace with your API URL should your localhost use a different port number

// Function to log in a user
export const loginUser = async (userData) => {
  try {
    // Send a POST request to the login endpoint with user data
    const response = await axios.post(`${BASE_URL}/login`, userData);
    // Return the data received from the API response
    return response.data;
  } catch (error) {
    // If an error occurs during the request, throw the error for handling
    throw error;
  }
};

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    // Send a POST request to the register endpoint with user data
    const response = await axios.post(`${BASE_URL}/register`, userData);
    // Return the data received from the API response
    return response.data;
  } catch (error) {
    // If an error occurs during the request, throw the error for handling
    throw error;
  }
};
