import React from "react";
import { ProductProps } from "../types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product: React.FC<ProductProps> = ({ name, categoryName, id }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{categoryName}</Card.Text>
        <Link
          to={{
            pathname: `/${id}`,
            state: {
              name,
              categoryName,
              id,
            },
          }}
        >
          <Button variant="primary">Edit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
