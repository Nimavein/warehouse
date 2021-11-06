import { useCategoriesData } from "../contextProviders/categoriesContext";
import { CategoryType } from "../types";

const CategoriesList: React.FC = () => {
  const categories: Promise<CategoryType[]> | any = useCategoriesData();
  return (
    <>
      <h1>Categories</h1>
    </>
  );
};

export default CategoriesList;
