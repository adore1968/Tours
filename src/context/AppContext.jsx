import React, { createContext, useContext, useState, useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const filterTours = tours.filter((item) => item.id !== id);
    setTours(filterTours);
  };

  return (
    <AppContext.Provider value={{ loading, tours, removeTour, fetchTours }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
