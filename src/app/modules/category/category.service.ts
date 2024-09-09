import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (category: TCategory) => {
  const result = await Category.create(category);
  return result;
};
const getCategoriesFromDB = async () => {
  const result = await Category.find();
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getCategoriesFromDB,
};
