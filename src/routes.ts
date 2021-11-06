import IRoute from "./components/interfaces";
import CategoriesList from "./components/CategoriesList";
import ProductsList from "./components/ProductsList";
import CreationSubpage from "./components/CreationSubpage";
import ProductEdit from "./components/ProductEdit";
import CategoryEdit from "./components/CategoryEdit";

const routes: IRoute[] = [
  {
    path: "/",
    name: "Products",
    component: ProductsList,
    exact: true,
  },
  {
    path: "/categories",
    name: "Categories",
    component: CategoriesList,
    exact: true,
  },
  {
    path: "/add",
    name: "Creation Subpage",
    component: CreationSubpage,
    exact: true,
  },
  {
    path: "/:productId",
    name: "Product",
    component: ProductEdit,
    exact: true,
  },
  {
    path: "/categories/:categoryId",
    name: "Category",
    component: CategoryEdit,
    exact: true,
  },
];

export default routes;
