import { useState } from "react";
import { UserContext } from "./userContext";

// const user = {
//   id: 123,
//   name: "Test",
//   email: "test@test.com",
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    // <UserContext.Provider value={{ hola: "mundo", user: user }}>
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};
