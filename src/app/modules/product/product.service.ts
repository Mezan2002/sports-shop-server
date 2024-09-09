import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = (productData: TProduct) => {
  const result = Product.create(productData);
  return result;
};

const getAllProductsFromDB = () => {
  const result = Product.find({});
  return result;
};

const getProductByIdFromDB = (productId: string) => {
  const result = Product.findById(productId);
  return result;
};

const updateProductIntoDB = (productId: string, productData: TProduct) => {
  const result = Product.findByIdAndUpdate(productId, productData, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = (productId: string) => {
  const result = Product.findByIdAndDelete(productId);
  return result;
};

export const ProductsServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
