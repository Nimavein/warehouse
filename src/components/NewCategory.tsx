import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { config } from "../apiRequests";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const NewCategory: React.FC = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate } = useMutation(async (newCategory: any) => {
    const response = await axios.post(
      "https://newdemostock.gopos.pl/ajax/219/product_categories",
      {
        name: newCategory.name,
      },
      config
    );
    if (response.status === 200) reset();
  });

  const onFormSubmit = (data: any) => {
    mutate(data);
    history.push("/categories");
  };

  return (
    <>
      <Form className="mt-4" onSubmit={handleSubmit(onFormSubmit)}>
        <h3 className="mb-3">Create New Category</h3>
        <Form.Group className="mb-3" controlId="categoryName">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Category Name"
            {...register("name")}
            name="name"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default NewCategory;
