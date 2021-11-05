export type ProductType = {
  category_id: number;
  cost_price_gross_money: { amount: number; currency: string };
  cost_price_money: { amount: number; currency: string };
  id: number;
  measure_type: string;
  name: string;
  recipe_amount: number;
  state: {
    available_amount: number;
    commited_amount: number;
    in_stock_amount: number;
    incoming_amount: number;
  };
  status: string;
  tax_id: number;
  type: string;
  uid: string;
  updated_at: string;
};
