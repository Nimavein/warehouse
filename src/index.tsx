import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { CategoriesProvider } from "./contextProviders/categoriesContext";
import { ProductsProvider } from "./contextProviders/productsContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchSelectProvider } from "./contextProviders/searchSelectContext";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CategoriesProvider>
        <ProductsProvider>
          <SearchSelectProvider>
            <App />
          </SearchSelectProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
