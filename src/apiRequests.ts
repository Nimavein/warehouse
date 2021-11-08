import { AxiosRequestConfig } from "axios";
import {
  ProductType,
  CategoryType,
  CategorySearchSelectType,
  TaxType,
} from "./types";
import axios from "axios";

export const config: AxiosRequestConfig = {
  headers: {
    Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
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
