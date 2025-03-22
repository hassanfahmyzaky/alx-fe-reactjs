// src/App.jsx
import React from "react";
import UserProfile from "./components/UserProfile"; // Importing the UserProfile component

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-3xl">Welcome to the React App</h1>
      {/* Render UserProfile component */}
      <UserProfile />
    </div>
  );
}

export default App;
