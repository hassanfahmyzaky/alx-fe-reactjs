import React from 'react';

const UserCard = ({ userData }) => {
  if (!userData) return null;

  return (
    <div className="user-card">
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
        Visit Profile
      </a>
    </div>
  );
};

export default UserCard;
