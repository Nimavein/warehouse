import React from "react";
import NewCategory from "./NewCategory";
import NewProduct from "./NewProduct";
import { Container } from "react-bootstrap";

const CreationSubpage: React.FC = () => {
  return (
    <Container>
      <NewCategory />
      <NewProduct />
    </Container>
  );
};

export default CreationSubpage;
