import { model, Schema } from "mongoose";
import { TCategory } from "./category.interface";

const categorySchema = new Schema<TCategory>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

export const Category = model<TCategory>("category", categorySchema);
