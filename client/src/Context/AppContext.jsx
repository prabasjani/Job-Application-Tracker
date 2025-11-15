import React, { createContext, useState } from "react";

export const AppContext = createContext(null);
const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);

  const capitalized = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const contextValues = { isAuth, setIsAuth, capitalized };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
