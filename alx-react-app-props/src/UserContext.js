// src/UserContext.js
import React, { createContext } from 'react';

// Create the context
export const UserContext = createContext();

// Custom hook to use the UserContext (optional, but cleaner)
export const useUser = () => React.useContext(UserContext);
