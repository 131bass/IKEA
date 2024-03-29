import UserModel from "./userModel";


export async function isAdmin(req, res, next) {
    try {
        const userId = req.cookies.userID;
        const user = await UserModel.findById(userId);
        if (!user.isAdmin) {
            res.status(401).json({ error: "User is not admin" });
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}