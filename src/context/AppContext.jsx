import React, { createContext, useContext, useState, useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
