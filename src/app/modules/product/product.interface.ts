export type TProduct = {
  id: string;
  name: string;
  brand: string;
  description: string;
  rating: number;
  images: string[];
  price: {
    regular_price: number;
    discounted_price: number;
    percentage_of_discount: number;
    currency: string;
  };
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
    color?: [
      {
        color_name: string;
        color_code: string;
      }
    ];
  };
  promoCode?: {
    code: string;
    discount: number;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
  };
};
