import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getSearchSelect } from "../apiRequests";
import { Spinner } from "react-bootstrap";
import { CategorySearchSelectType } from "../types";

const SearchSelectContext = React.createContext({});

export const SearchSelectProvider: React.FC = ({ children }) => {
  const { data, isLoading, error } = useQuery<CategorySearchSelectType[] | any>(
    "searchCategories",
    getSearchSelect
  );

  if (error) return <h1>Something went wrong...</h1>;
  if (isLoading) return <Spinner animation="border" />;

  return (
    <SearchSelectContext.Provider value={data}>
      {children}
    </SearchSelectContext.Provider>
  );
};

export const useSearchSelectData = () => {
  const searchSelectContext = useContext(SearchSelectContext);
  return searchSelectContext;
};
