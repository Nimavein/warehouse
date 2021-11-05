import { useQuery } from "react-query";
import { AxiosRequestConfig } from "axios";
import { Spinner } from "react-bootstrap";
import { ProductType } from "./types";
import ProductsList from "./components/ProductsList";
import CategoriesList from "./components/CategoriesList";
import ProductEdit from "./components/ProductEdit";
import CategoryEdit from "./components/CategoryEdit";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const config: AxiosRequestConfig = {
  headers: {
    Authorization: "fd9ba9e1-0788-4e8f-ac46-a43df43e205e",
  },
};

const getProducts = async (): Promise<ProductType[]> =>
  await (
    await fetch("https://newdemostock.gopos.pl/ajax/219/products", config)
  ).json();

const App: React.FC = () => {
  const { data, isLoading, error } = useQuery<ProductType[]>(
    "products",
    getProducts
  );
  console.log(data);
  if (error) return <h1>Something went wrong...</h1>;
  if (isLoading) return <Spinner animation="border" />;

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/productId" element={<ProductEdit />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path=":categoryId" element={<CategoryEdit />} />
          <Route path="/add" element={<CategoriesList />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
