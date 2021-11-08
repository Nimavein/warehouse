import React from "react";
import { ProductProps } from "../types";
import { Card, Button, Stack } from "react-bootstrap";
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
        <Stack gap={1}>
          <Link
            to={{
              pathname: `/${props.id}`,
              state: {
                ...props,
              },
            }}
          >
            <Button style={{ width: "100%" }} variant="primary">
              Edit
            </Button>
          </Link>
          <Button onClick={deleteProduct} variant="danger">
            Delete
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default Product;
