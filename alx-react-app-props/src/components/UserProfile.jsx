// src/components/UserProfile.jsx
import React, { useContext } from 'react';  // Import React and useContext hook
import { UserContext } from './UserContext'; // Import UserContext to access the user data

function UserProfile() {
  // Use the useContext hook to get the user data from UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>Name: {userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
