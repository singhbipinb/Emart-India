import express from "express";
import { getbProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/:category", getbProducts);

export default router;
