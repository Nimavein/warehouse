import { AxiosRequestConfig } from "axios";
import { ProductType, CategoryType } from "./types";
import axios from "axios";

const config: AxiosRequestConfig = {
  headers: {
    Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
  },
};

export const getProducts = async (): Promise<ProductType[]> =>
  await await axios
    .get("https://newdemostock.gopos.pl/ajax/219/products", config)
    .then((response) => response.data.data);

export const getCategories = async (): Promise<CategoryType[]> =>
  await await axios
    .get("https://newdemostock.gopos.pl/ajax/219/product_categories", config)
    .then((response) => response.data.data);