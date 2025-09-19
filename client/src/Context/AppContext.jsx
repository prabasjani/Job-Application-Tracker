import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "sonner";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [applicationData, setApplicationData] = useState([]);

  const fetchApplicationData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/applications/all-applies"
      );
      setApplicationData(response?.data?.data);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    fetchApplicationData();
  }, [applicationData]);

  const capitalized = (str) => {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  };

  const contextValues = { applicationData, capitalized };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
