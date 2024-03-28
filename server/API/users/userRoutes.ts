import  express  from 'express';
import { checkPassword, deleteUser, login, register, updateDetails } from './usersCtrl';



const router = express.Router();

router
  .post("/register", register)
  .post("/login", login)
  .post("/checkPassword", checkPassword)
  .patch("/:id", updateDetails)
  .delete("/:id", deleteUser)

export default router;
