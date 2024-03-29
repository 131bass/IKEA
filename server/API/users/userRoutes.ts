import express from 'express';
import { checkPassword, deleteUser, getUser, login, logout, register, updateDetails } from './usersCtrl';



const router = express.Router();

router
  .get("/user", getUser)
  .get("/logout", logout)
  .post("/register", register)
  .post("/login", login)
  .post("/checkPassword", checkPassword)
  .patch("/:id", updateDetails)
  .delete("/:id", deleteUser)

export default router;
