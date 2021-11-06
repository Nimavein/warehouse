import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getCategories } from "../apiRequests";
import { Spinner } from "react-bootstrap";
import { CategoryType } from "../types";

const CategoriesContext = React.createContext({});

export const CategoriesProvider: React.FC = ({ children }) => {
  const { data, isLoading, error } = useQuery<CategoryType[] | any, Error>(
    "categories",
    getCategories
  );

  if (error) return <h1>Something went wrong...</h1>;
  if (isLoading) return <Spinner animation="border" />;

  return (
    <CategoriesContext.Provider value={data}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategoriesData = () => {
  const categoriesContext = useContext(CategoriesContext);
  return categoriesContext;
};
