import express from "express";
import { CategoryControllers } from "./category.controller";

const router = express.Router();

router.post("/create-category", CategoryControllers.createCategory);
router.get("/get-categories", CategoryControllers.getCategories);

export const CategoryRoutes = router;
