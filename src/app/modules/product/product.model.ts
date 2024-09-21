import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const colorSchema = new Schema({
  color_code: { type: [String], required: true },
  color_name: { type: String, required: true },
});

const priceSchema = new Schema({
  regular_price: { type: Number, required: true },
  discounted_price: { type: Number, required: true },
  percentage_of_discount: { type: Number, required: true },
  currency: { type: String, required: true },
});

const stockSchema = new Schema({
  current_stock_amount: { type: Number, required: true },
  low_stock_amount: { type: Number, required: true },
});

const categorySchema = new Schema({
  category_id: { type: String, required: true },
  category_name: { type: String, required: true },
});

const productAttributesSchema = new Schema({
  size: { type: [String] },
  color: { type: colorSchema, required: true },
});

const productSchema = new Schema<TProduct>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: priceSchema, required: true },
  description: { type: String, required: true },
  stock: { type: stockSchema, required: true },
  category: { type: categorySchema, required: true },
  productAttributes: { type: productAttributesSchema, required: true },
  rating: { type: Number, required: true },
  images: { type: [String], required: true },
});

export const Product = model<TProduct>("Product", productSchema);
