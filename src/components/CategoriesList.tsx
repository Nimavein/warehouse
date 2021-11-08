import { Container, Row, Col } from "react-bootstrap";
import { useCategoriesData } from "../contextProviders/categoriesContext";
import { CategoryType } from "../types";
import Category from "./Category";

const CategoriesList: React.FC = () => {
  const categories: Promise<CategoryType[]> | any = useCategoriesData();
  return (
    <Container>
      <h1 className="mt-3 mb-3">Categories</h1>
      <Row>
        {categories &&
          categories.map((category: CategoryType) => {
            return (
              <Col lg={4} md={6} key={category.id}>
                <Category name={category.name} id={category.id} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default CategoriesList;
