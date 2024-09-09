import { Request, Response } from "express";
import { CategoryServices } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const categoryData = req.body;
    const result = await CategoryServices.createCategoryIntoDB(categoryData);

    res.status(201).send({
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async (req: Request, res: Response) => {
  try {
    const result = await CategoryServices.getCategoriesFromDB();

    res.status(200).send({
      success: true,
      message: "Category retrived successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const CategoryControllers = {
  createCategory,
  getCategories,
};
