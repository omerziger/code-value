import React, { createContext, useContext, useReducer } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ reducer, initialState, children }) => {
  return (
    <ProductsContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useStateValue = () => useContext(ProductsContext);
