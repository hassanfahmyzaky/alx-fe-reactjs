React.createContext()
import { createContext } from 'react';

// Creating the UserContext with a default value (in case there's no provider)
export const UserContext = createContext({
  name: "Default User", // default name
  email: "default@example.com" // default email
});
