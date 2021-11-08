import { Container, Row, Col } from "react-bootstrap";
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
      <h1 className="mt-3 mb-3">Products</h1>
      <Row>
        {products &&
          products.map((product: ProductType) => {
            return (
              <Col lg={4} md={6} key={product.id}>
                <Product
                  categoryName={getProductCategory(product)[0].name}
                  {...product}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default ProductsList;
