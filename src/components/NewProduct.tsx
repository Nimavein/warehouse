import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { config, getTaxes } from "../apiRequests";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useSearchSelectData } from "../contextProviders/searchSelectContext";
import {
  CategorySearchSelectType,
  MeasureTypeType,
  NewProductType,
  TaxType,
} from "../types";

const NewProduct: React.FC = () => {
  const [taxes, setTaxes] = useState([]);
  const categoriesSearchSelect: Promise<CategorySearchSelectType[]> | any =
    useSearchSelectData();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const getData = async () => {
      const data: any = await getTaxes();
      setTaxes(data);
    };
    getData();
  }, []);

  const { mutate } = useMutation(async (newProduct: NewProductType) => {
    await axios
      .post(
        "https://newdemostock.gopos.pl/ajax/219/products",
        {
          name: newProduct.newProductName,
          category_id: newProduct.newProductCategory,
          measure_type: newProduct.newProductMeasureType,
          tax_id: newProduct.newProductTax,
          type: "BASIC",
        },
        config
      )
      .catch(function (error) {
        alert(`Could not add new product: ${error.message}`);
      });
  });

  const measureTypes: MeasureTypeType[] = [
    { name: "szt", id: 1 },
    { name: "kg", id: 2 },
    { name: "l", id: 3 },
    { name: "opakowanie", id: 4 },
  ];

  const onFormSubmit = (data: NewProductType) => {
    mutate(data);
    history.push("/");
  };

  return (
    <Form className="mt-5" onSubmit={handleSubmit(onFormSubmit)}>
      <h3 className="mb-3">Create New Product</h3>
      <Form.Group className="mb-3" controlId="newProductName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product Name"
          {...register("newProductName")}
          required
          name="newProductName"
        />
      </Form.Group>

      <Form.Select
        className="mb-3"
        aria-label="Category Select"
        {...register("newProductCategory")}
        required
        name="newProductCategory"
      >
        <option value="">Select category</option>
        {categoriesSearchSelect.map((category: CategorySearchSelectType) => {
          return (
            <option key={category.id} value={category.id}>
              {category.label}
            </option>
          );
        })}
      </Form.Select>

      <Form.Select
        className="mb-3"
        aria-label="Category Select"
        {...register("newProductTax")}
        required
        name="newProductTax"
      >
        <option value="">Select tax</option>
        {taxes.map((tax: TaxType) => {
          return (
            <option key={tax.id} value={tax.id}>
              {tax.name}
            </option>
          );
        })}
      </Form.Select>

      <Form.Select
        className="mb-3"
        aria-label="Measure Type Select"
        {...register("newProductMeasureType")}
        required
        name="newProductMeasureType"
      >
        <option value="">Select measure type</option>
        {measureTypes.map((measureType: MeasureTypeType) => {
          return (
            <option key={measureType.id} value={measureType.id}>
              {measureType.name}
            </option>
          );
        })}
      </Form.Select>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewProduct;
