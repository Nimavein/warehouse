import React from "react";
import NewCategory from "./NewCategory";
import NewProduct from "./NewProduct";
import { Col, Container } from "react-bootstrap";

const CreationSubpage: React.FC = () => {
  return (
    <Container>
      <Col lg={6}>
        <NewCategory />
        <NewProduct />
      </Col>
    </Container>
  );
};

export default CreationSubpage;
