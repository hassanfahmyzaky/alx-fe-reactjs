// UserContext.js

import { createContext } from 'react';

// Step 1: Initialize the context with a default value
// The default value is an object with name and email
export const UserContext = createContext({
  name: "Default User",
  email: "default@example.com"
});
