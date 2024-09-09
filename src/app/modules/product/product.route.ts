import express from "express";
import { ProductsControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductsControllers.createProduct);
router.get("/get-all-product", ProductsControllers.getAllProducts);
router.get("/get-product/:id", ProductsControllers.getProductById);
router.put("/update-product/:id", ProductsControllers.updateProduct);
router.delete("/delete-product/:id", ProductsControllers.deleteProduct);

export const ProductsRoutes = router;
