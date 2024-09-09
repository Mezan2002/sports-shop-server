import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  category_id: { type: String, required: true },
  rating: { type: Number, required: true },
  images: { type: [String], required: true },
});

export const Product = model<TProduct>("Product", productSchema);
