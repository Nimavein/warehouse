export type ProductType = {
  category_id: number;
  cost_price_gross_money: costPriceGrossMoney[];
  cost_price_money: costPriceMoney[];
  id: number;
  measure_type: string;
  name: string;
  recipe_amount: number;
  state: State[];
  status: string;
  tax_id: number;
  type: string;
  uid: string;
  updated_at: string;
};

type State = {
  available_amount: number;
  commited_amount: number;
  in_stock_amount: number;
  incoming_amount: number;
};

type costPriceGrossMoney = {
  amount: number;
  currency: string;
};

type costPriceMoney = {
  amount: number;
  currency: string;
};

export type CategoryType = {
  id: number;
  uid: string;
  name: string;
  updated_at: string;
  status: string;
};

export type ProductProps = {
  name: string;
  categoryName: string;
};
