import { useQuery } from "react-query";
import { AxiosRequestConfig } from "axios";
import { Spinner } from "react-bootstrap";
import { ProductType } from "./types";

const config: AxiosRequestConfig = {
  headers: {
    Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
  },
};

const getProducts = async (): Promise<ProductType[]> =>
  await (
    await fetch("https://newdemostock.gopos.pl/ajax/219/products", config)
  ).json();

function App() {
  const { data, isLoading, error } = useQuery<ProductType[]>(
    "products",
    getProducts
  );
  console.log(data);
  if (error) return <h1>Something went wrong...</h1>;
  if (isLoading) return <Spinner animation="border" />;

  return <></>;
}

export default App;
