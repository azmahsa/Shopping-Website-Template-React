import react, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  //User State
  const [user, setUser] = useState([]);
  //featch Product
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://dummyjson.com/users/15");
      const user = await response.json();
      setUser(user);
    };
    fetchUser();
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
