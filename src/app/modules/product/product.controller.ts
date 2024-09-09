import { Request, Response } from "express";
import { ProductsServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductsServices.createProductIntoDB(productData);
  res.status(201).send({
    success: true,
    message: "Product created successfully",
    data: result,
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await ProductsServices.getAllProductsFromDB();
  res.status(200).send({
    success: true,
    message: "Products retrived successfully",
    data: products,
  });
};

const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await ProductsServices.getProductByIdFromDB(productId);
  res.status(200).send({
    success: true,
    message: "Product retrieved successfully",
    data: product,
  });
};

const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const productData = req.body;
  const result = await ProductsServices.updateProductIntoDB(
    productId,
    productData
  );
  res.status(200).send({
    success: true,
    message: "Product updated successfully",
    data: result,
  });
};

const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const result = await ProductsServices.deleteProductFromDB(productId);
  res.status(200).send({
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
};

export const ProductsControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
