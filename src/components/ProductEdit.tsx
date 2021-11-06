import { useLocation } from "react-router-dom";
import React from "react";
import { LocationType } from "../types";

const ProductEdit: React.FC = (props: any) => {
  const location: LocationType = useLocation();
  const { name, categoryName, id } = location.state;
  console.log(location);

  return (
    <div>
      {id}
      {name}
    </div>
  );
};

export default ProductEdit;
