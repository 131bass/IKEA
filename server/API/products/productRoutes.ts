import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProduct, getProductsByName, getProductsBySubCategory, updatePrice } from './productsCtrl';
import { isAdmin } from '../users/userMiddleware';



const router = express.Router();

router
  .get("/getAllProducts", getAllProducts)
  .get("/getProductsBySubCategory", getProductsBySubCategory)
  .get("/getProduct", getProduct)
  .get("/getProductsByName", getProductsByName)
  .post("/addProduct", isAdmin, addProduct)
  .patch("/:id", isAdmin, updatePrice)
  .delete("/:id", isAdmin, deleteProduct)

export default router;
