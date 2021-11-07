import React from "react";
import { CategoryProps } from "../types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category: React.FC<CategoryProps> = (props) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.id}</Card.Text>
        <Link
          to={{
            pathname: `/categories/${props.id}`,
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

export default Category;
