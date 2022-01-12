import * as React from "react";
import { useState } from "react";

const ProductContext = React.createContext();

export const ProductContextProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [search, setSearch] = useState("");
  const value = { likedProducts, setLikedProducts, search, setSearch };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = React.useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};
