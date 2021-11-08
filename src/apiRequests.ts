import {
  ProductType,
  CategoryType,
  CategorySearchSelectType,
  TaxType,
} from "./types";
import axios from "axios";

export const config: any = {
  headers: {
    Authorization: process.env.REACT_APP_AUTH_TOKEN,
  },
};

export const getProducts = async (): Promise<ProductType[]> =>
  await axios
    .get("https://newdemostock.gopos.pl/ajax/219/products/?size=1000", config)
    .then((response) => response.data.data);

export const getCategories = async (): Promise<CategoryType[]> =>
  await axios
    .get(
      "https://newdemostock.gopos.pl/ajax/219/product_categories/?size=1000",
      config
    )
    .then((response) => response.data.data);

export const getSearchSelect = async (): Promise<CategorySearchSelectType[]> =>
  await axios
    .get(
      "https://newdemostock.gopos.pl/ajax/219/product_categories/search_select/?size=1000",
      config
    )
    .then((response) => response.data.data);

export const getTaxes = async (): Promise<TaxType[]> =>
  await axios
    .get("https://newdemostock.gopos.pl/ajax/219/taxes", config)
    .then((response) => response.data.data);
