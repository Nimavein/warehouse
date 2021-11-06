import ProductsList from "./components/ProductsList";
import CategoriesList from "./components/CategoriesList";
import ProductEdit from "./components/ProductEdit";
import CategoryEdit from "./components/CategoryEdit";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
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
