import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProduct, getProductsByName, getProductsBySubCategory, updatePrice } from './productsCtrl';



const router = express.Router();

router
  .get("/getAllProducts", getAllProducts)
  .get("/getProductsBySubCategory", getProductsBySubCategory)
  .get("/getProduct", getProduct)
  .get("/getProductsByName", getProductsByName)
  .post("/addProduct", addProduct)
  .delete("/:id", deleteProduct)
  .patch("/:id", updatePrice)

export default router;
