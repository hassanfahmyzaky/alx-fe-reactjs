// src/services/githubService.js
import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  // Return the user data
  } catch (error) {
    throw new Error('User not found');  // Throw an error if the user is not found or there's an issue
  }
};

export { fetchUserData };
