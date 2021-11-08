import { useLocation } from "react-router-dom";
import React from "react";
import { CategorySearchSelectType, LocationType } from "../types";
import { Form, Button, Container } from "react-bootstrap";
import { useCategoriesData } from "../contextProviders/categoriesContext";
import { CategoryType, EditProductFormType } from "../types";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import axios from "axios";
import { config } from "../apiRequests";
import { useHistory } from "react-router-dom";

const CategoryEdit: React.FC = (props: any) => {
  const history = useHistory();

  const { mutate } = useMutation(async (editedCategory: any) => {
    const response = await axios.put(
      `https://newdemostock.gopos.pl/ajax/219/product_categories/${id}`,
      {
        name: editedCategory.categoryName,
      },
      config
    );
    if (response.status === 200) reset();
  });

  const onFormSubmit = (data: any) => {
    mutate(data);
    history.push("/categories");
  };

  const { register, handleSubmit, reset } = useForm();

  const location: LocationType = useLocation();
  const { name, id } = location.state;

  return (
    <Container>
      {name}

      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Form.Group className="mb-3" controlId="categoryName">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            defaultValue={name}
            {...register("categoryName")}
            name="categoryName"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CategoryEdit;
