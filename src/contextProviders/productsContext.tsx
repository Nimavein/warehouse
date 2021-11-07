import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../apiRequests";
import { Spinner } from "react-bootstrap";
import { ProductType } from "../types";

const ProductsContext = React.createContext({});

export const ProductsProvider: React.FC = ({ children }) => {
  const { data, isLoading, error } = useQuery<ProductType[] | any>(
    "products",
    getProducts,
    {
      refetchInterval: 300,
    }
  );

  if (error) return <h1>Something went wrong...</h1>;
  if (isLoading) return <Spinner animation="border" />;

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export const useProductsData = () => {
  const productsContext = useContext(ProductsContext);
  return productsContext;
};
