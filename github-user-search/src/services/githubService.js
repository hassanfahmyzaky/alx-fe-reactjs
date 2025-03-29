import axios from 'axios';

// Fetch user data by username (basic search)
const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  // Return the user data
  } catch (error) {
    throw new Error('User not found');  // Throw an error if the user is not found or there's an issue
  }
};

// Extended GitHub search function with location and minRepos (advanced search)
export const fetchGitHubUsers = async (username, location, minRepos) => {
  try {
    // Constructing the query string with the advanced search parameters
    let query = `user:${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);

    // Return data from the response
    return response.data;
  } catch (error) {
    throw new Error('Error fetching users from GitHub');
  }
};

export { fetchUserData, fetchGitHubUsers };
