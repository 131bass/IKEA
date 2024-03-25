import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProductsByCategory } from './productsCtrl';



const router = express.Router();

router
.get("/getAllProducts",getAllProducts)
.get("/getProductsByCategory",getProductsByCategory)
  .post("/addProduct", addProduct)
  .delete("/deleteProduct", deleteProduct)

export default router;
