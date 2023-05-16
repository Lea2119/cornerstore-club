import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [credits, setCredits] = useState(0);

  return (
    <UserContext.Provider value={{ credits, setCredits }}>
      {children}
    </UserContext.Provider>
  );
};
