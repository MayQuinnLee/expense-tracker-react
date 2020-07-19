import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 3000 },
    { id: 3, text: "Book", amount: -30 },
    { id: 4, text: "Camera", amount: -200 },
  ],
};

//Create context -this is like a store so that other components have access
export const GlobalContext = createContext(initialState);

//Provider component -provides state and actions
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
