import React from "react";
import { ProductProps } from "../types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product: React.FC<ProductProps> = (props) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.categoryName}</Card.Text>
        <Link
          to={{
            pathname: `/${props.id}`,
            state: {
              ...props,
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
