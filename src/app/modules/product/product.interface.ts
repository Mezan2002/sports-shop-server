export type TProduct = {
  id: string;
  name: string;
  brand: string;
  price: {
    regular_price: number;
    discounted_price: number;
    percentage_of_discount: number;
    currency: string;
  };
  description: string;
  stock: {
    current_stock_amount: number;
    low_stock_amount: number;
  };
  category: {
    category_id: string;
    category_name: string;
  };
  productAttributes: {
    size?: string[];
    color: {
      color_code: string[];
      color_name: string;
    };
  };
  rating: number;
  images: string[];
};
