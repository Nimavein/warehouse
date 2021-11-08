import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { config, getTaxes } from "../apiRequests";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useSearchSelectData } from "../contextProviders/searchSelectContext";
import { CategorySearchSelectType, measureTypeType, TaxType } from "../types";

const NewProduct: React.FC = () => {
  const [taxes, setTaxes] = useState([]);
  const categoriesSearchSelect: Promise<CategorySearchSelectType[]> | any =
    useSearchSelectData();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const getData = async () => {
      const data: any = await getTaxes();
      setTaxes(data);
    };
    getData();
  }, []);

  const { mutate } = useMutation(async (newProduct: any) => {
    const response = await axios.post(
      "https://newdemostock.gopos.pl/ajax/219/products",
      {
        name: newProduct.newProductName,
        category_id: newProduct.newProductCategory,
        measure_type: newProduct.newProductMeasureType,
        tax_id: newProduct.newProductTax,
        type: "BASIC",
      },
      config
    );
    if (response.status === 200) reset();
  });

  const measureTypes = [
    { name: "szt", id: 1 },
    { name: "kg", id: 2 },
    { name: "l", id: 3 },
    { name: "opakowanie", id: 4 },
  ];

  const onFormSubmit = (data: any) => {
    mutate(data);
    history.push("/");
  };

  return (
    <Form className="mt-5" onSubmit={handleSubmit(onFormSubmit)}>
      <Form.Group className="mb-3" controlId="newProductName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product Name"
          {...register("newProductName")}
          name="newProductName"
        />
      </Form.Group>

      <Form.Select
        className="mb-3"
        aria-label="Category Select"
        {...register("newProductCategory")}
        name="newProductCategory"
      >
        <option>Select category</option>
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
        name="newProductTax"
      >
        <option>Select tax</option>
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
        name="newProductMeasureType"
      >
        <option>Select measure type</option>
        {measureTypes.map((measureType: measureTypeType) => {
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
