import React from "react";
import { useLocation } from "react-router-dom";
import { CategoryProps, EditedCategoryType, LocationType } from "../types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import axios from "axios";
import { config } from "../apiRequests";
import { useHistory } from "react-router-dom";

const CategoryEdit: React.FC<CategoryProps> = () => {
  const history = useHistory();

  const { mutate } = useMutation(async (editedCategory: EditedCategoryType) => {
    await axios
      .put(
        `https://newdemostock.gopos.pl/ajax/219/product_categories/${id}`,
        {
          name: editedCategory.categoryName,
        },
        config
      )
      .catch(function (error) {
        alert(`Could not edit category: ${error.message}`);
      });
  });

  const onFormSubmit = (data: EditedCategoryType) => {
    mutate(data);
    history.push("/categories");
  };

  const { register, handleSubmit } = useForm();

  const location: LocationType = useLocation();
  const { name, id } = location.state;

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <h3 className="mb-3 mt-4">Edit {name} category</h3>
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            <Form.Group className="mb-3" controlId="categoryName">
              <Form.Label>Category name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                defaultValue={name}
                {...register("categoryName")}
                required
                name="categoryName"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryEdit;
