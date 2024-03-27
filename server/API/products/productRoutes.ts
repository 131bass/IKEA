import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProduct, getProductsByName, getProductsBySubCategory } from './productsCtrl';



const router = express.Router();

router
  .get("/getAllProducts", getAllProducts)
  .get("/getProductsBySubCategory", getProductsBySubCategory)
  .get("/getProduct", getProduct)
  .get("/getProductsByName", getProductsByName)
  .post("/addProduct", addProduct)
  .delete("/", deleteProduct)

export default router;
