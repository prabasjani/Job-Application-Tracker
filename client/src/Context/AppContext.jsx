import React, { createContext, useEffect, useState } from "react";
import api from "../Utils/api";
import { toast } from "sonner";

export const AppContext = createContext(null);
const AppContextProvider = ({ children }) => {
  const capitalized = (str) => str?.charAt(0)?.toUpperCase() + str?.slice(1);

  const [isAuth, setIsAuth] = useState(null);
  const [currUser, setCurrUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Get All Applications Data
  const [applicationData, setApplicationData] = useState([]);
  const fetchAllApplications = async () => {
    const response = await api.get("/application/all-applications");
    setApplicationData(response?.data?.applications);
  };

  const fetchCurrUser = async () => {
    try {
      const response = await api.get("/user/current-user");
      if (response?.data?.success) {
        setIsAuth(true);
        setCurrUser(response?.data?.user);
      } else {
        setIsAuth(false);
        setCurrUser(null);
      }
    } catch (error) {
      setIsAuth(false);
      setCurrUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrUser();
    if (isAuth) {
      fetchAllApplications();
    }
  }, [isAuth, applicationData]);
  const contextValues = {
    isAuth,
    setIsAuth,
    capitalized,
    currUser,
    fetchCurrUser,
    applicationData,
    loading,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
