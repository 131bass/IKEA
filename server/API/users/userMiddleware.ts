import UserModel from "./userModel";
import jwt from "jwt-simple";


export async function isAdmin(req, res, next) {
    try {
        console.log("server")
        const userID = req.cookies.userID;
        const secret = process.env.JWT_SECRET;
        const id = jwt.decode(userID, secret)
        console.log(id.userID)
        const user = await UserModel.findById(id.userID);
        console.log(user)
        if (!user.isAdmin) {
            res.status(401).json({ error: "User is not admin" });
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}