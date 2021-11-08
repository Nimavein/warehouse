import { Container } from "react-bootstrap";
import { useCategoriesData } from "../contextProviders/categoriesContext";
import { useProductsData } from "../contextProviders/productsContext";
import { CategoryType, ProductType } from "../types";
import Product from "./Product";

const ProductsList: React.FC = () => {
  const categories: Promise<CategoryType[]> | any = useCategoriesData();
  const products: Promise<ProductType[]> | any = useProductsData();

  const getProductCategory = (product: ProductType) => {
    return categories.filter((category: CategoryType) => {
      return category.id === product.category_id;
    });
  };

  return (
    <Container>
      <h1>Products</h1>
      {products &&
        products.map((product: ProductType) => {
          return (
            <Product
              key={product.id}
              categoryName={getProductCategory(product)[0].name}
              {...product}
            />
          );
        })}
    </Container>
  );
};

export default ProductsList;
