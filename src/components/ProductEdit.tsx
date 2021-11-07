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
import { useSearchSelectData } from "../contextProviders/searchSelectContext";
import { useHistory } from "react-router-dom";

const ProductEdit: React.FC = (props: any) => {
  const categoriesSearchSelect: Promise<CategorySearchSelectType[]> | any =
    useSearchSelectData();
  const history = useHistory();

  const editProduct = async ({ id, ...data }: any) => {
    const response = await axios.put(
      `https://newdemostock.gopos.pl/ajax/219/products/${id}`,
      data,
      config
    );

    return response;
  };

  const { mutate } = useMutation(async (editedProduct: any) => {
    const response = await axios.put(
      `https://newdemostock.gopos.pl/ajax/219/products/${id}`,
      {
        name: editedProduct.productName,
      },
      config
    );
    if (response.status === 200) reset();
  });

  const onFormSubmit = (data: any) => {
    mutate(data);
    history.push("/");
  };

  const { register, handleSubmit, reset } = useForm();

  const location: LocationType = useLocation();
  const { name, categoryName, id } = location.state;

  return (
    <Container>
      {id}
      {name}
      {categoryName}

      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Product Name"
            defaultValue={name}
            {...register("productName")}
            name="productName"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoryId">
          <Form.Label>Category</Form.Label>
          <Form.Select
            className="mb-3"
            aria-label="Category Select"
            {...register("categoryId")}
          >
            {categoriesSearchSelect.map(
              (category: CategorySearchSelectType) => {
                return (
                  <option
                    key={category.id}
                    selected={
                      category.label === categoryName ? true : undefined
                    }
                    value={category.id}
                  >
                    {category.label}
                  </option>
                );
              }
            )}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ProductEdit;
