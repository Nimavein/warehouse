import { useLocation } from "react-router-dom";
import React from "react";
import {
  CategorySearchSelectType,
  EditedProductType,
  LocationType,
} from "../types";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import axios from "axios";
import { config } from "../apiRequests";
import { useSearchSelectData } from "../contextProviders/searchSelectContext";
import { useHistory } from "react-router-dom";

const ProductEdit: React.FC<EditedProductType> = (props: any) => {
  const categoriesSearchSelect: Promise<CategorySearchSelectType[]> | any =
    useSearchSelectData();
  const history = useHistory();

  const { mutate } = useMutation(async (editedProduct: EditedProductType) => {
    const response = await axios.put(
      `https://newdemostock.gopos.pl/ajax/219/products/${id}`,
      {
        name: editedProduct.productName,
        type: props.location.state.type,
        measure_type: props.location.state.measure_type,
        category_id: editedProduct.categoryId,
        tax_id: props.location.state.tax_id,
      },
      config
    );
    if (response.status === 200) reset();
  });

  const onFormSubmit = (data: EditedProductType) => {
    mutate(data);
    history.push("/");
  };

  const { register, handleSubmit, reset } = useForm();

  const location: LocationType = useLocation();
  const { name, categoryName, id } = location.state;

  return (
    <Container>
      <h3 className="mb-3 mt-4">Edit {name} product</h3>
      <Row>
        <Col lg={6}>
          <Form onSubmit={handleSubmit(onFormSubmit)}>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Name"
                defaultValue={name}
                {...(register("productName"),
                { required: true, minLength: 2, maxLength: 60 })}
                name="productName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="categoryId">
              <Form.Label>Category</Form.Label>
              <Form.Select
                className="mb-3"
                aria-label="Category Select"
                {...(register("categoryId"), { required: true })}
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
        </Col>
      </Row>
    </Container>
  );
};

export default ProductEdit;
