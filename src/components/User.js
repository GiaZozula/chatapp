import { createContext, useState } from "react";

const User = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export default User;
