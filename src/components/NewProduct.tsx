import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { config } from "../apiRequests";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const NewProduct: React.FC = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate } = useMutation(async (newProduct: any) => {
    const response = await axios.post(
      "https://newdemostock.gopos.pl/ajax/219/products",
      {
        name: newProduct.name,
      },
      config
    );
    if (response.status === 200) reset();
    console.log(newProduct.name);
  });

  const onFormSubmit = (data: any) => {
    mutate(data);
    history.push("/");
  };

  return (
    <Form className="mt-5" onSubmit={handleSubmit(onFormSubmit)}>
      <Form.Label>Add Product</Form.Label>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product Name"
          {...register("name")}
          name="name"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewProduct;
