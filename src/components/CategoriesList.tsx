import { Container } from "react-bootstrap";
import { useCategoriesData } from "../contextProviders/categoriesContext";
import { CategoryType } from "../types";
import Category from "./Category";

const CategoriesList: React.FC = () => {
  const categories: Promise<CategoryType[]> | any = useCategoriesData();
  return (
    <Container>
      <h1>Categories</h1>
      {categories &&
        categories.map((category: CategoryType) => {
          return (
            <Category key={category.id} name={category.name} id={category.id} />
          );
        })}
    </Container>
  );
};

export default CategoriesList;
