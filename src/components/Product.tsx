import React from "react";
import { ProductProps } from "../types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { config } from "../apiRequests";

const Product: React.FC<ProductProps> = (props) => {
  const deleteProduct = async () =>
    await axios.delete(
      `https://newdemostock.gopos.pl/ajax/219/products/${props.id}`,
      config
    );

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
        <Button onClick={deleteProduct} className="ml-3" variant="danger">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
