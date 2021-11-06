import { useCategoriesData } from "../contextProviders/categoriesContext";
import { useProductsData } from "../contextProviders/productsContext";
import { CategoryType, ProductType } from "../types";
import Product from "./Product";

const ProductsList: React.FC = () => {
  const categories: Promise<CategoryType[]> | any = useCategoriesData();
  const products: Promise<ProductType[]> | any = useProductsData();
  console.log(products);
  console.log(categories);

  const getProductCategory = (product: ProductType) => {
    return categories.filter((category: CategoryType) => {
      return category.id === product.category_id;
    });
  };

  return (
    <>
      <h1>Products</h1>
      {products &&
        products.map((product: ProductType) => {
          return (
            <Product
              key={product.id}
              name={product.name}
              id={product.id}
              categoryName={getProductCategory(product)[0].name}
            />
          );
        })}
    </>
  );
};

export default ProductsList;
