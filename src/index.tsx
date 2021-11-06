import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { CategoriesProvider } from "./contextProviders/categoriesContext";
import { ProductsProvider } from "./contextProviders/productsContext";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CategoriesProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CategoriesProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
