import React from "react";
import { ProductProps } from "../types";

const Product: React.FC<ProductProps> = ({ name, categoryName }) => {
  return (
    <>
      {name}
      {categoryName}
    </>
  );
};

export default Product;
