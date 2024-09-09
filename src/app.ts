import cors from "cors";
import express, { Application, Request, Response } from "express";
import { CategoryRoutes } from "./app/modules/category/category.route";
import { ProductsRoutes } from "./app/modules/product/product.route";

const app: Application = express();
// parsers
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/product", ProductsRoutes);

app.get("/", (req: Request, res: Response) => {
  const message = "Hurrah server is running...!";
  res.send(message);
});

export default app;
