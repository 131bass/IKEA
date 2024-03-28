import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import UserModel, { UserValidation } from "./userModel";
const saltRounds = 10;

export async function register(req, res) {
    try {
        const { firstName, lastName, email, phoneNumber, password } = req.body;
        if (!email || !firstName || !lastName || !password) throw new Error("Couldn't get all fields from req.body");

        const { error } = UserValidation.validate({ firstName, lastName, email, password });
        if (error) throw error;

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const userDB = new UserModel({ firstName, lastName, email, phoneNumber, password: hash });
        await userDB.save();

        const cookie = { user: userDB }
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("Couldn't load secret from .env");

        const JWTCookie = jwt.encode(cookie, secret);

        if (userDB) {
            res.cookie("user", JWTCookie);
            res.send({ register: true, userDB });
        } else {
            res.send({ register: false });
        }

    } catch (error) {
        res.send({ error: error.message });
        console.error(error)
    }
}



export async function login(req, res) {
    try {

        const { email, password } = req.body;
        if (!email || !password) throw new Error("Couldn't get all fields of user from req.body in function login");

        const userDB = await UserModel.findOne({ email });
        if (!userDB) throw new Error("User with that email can't be found")
        if (!userDB.password) throw new Error("No password in DB");

        const isMatch = await bcrypt.compare(password, userDB.password);
        if (!isMatch) throw new Error("Email or password do not match");

        const cookie = { user: userDB };
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("Couldn't load secret from .env");

        const JWTCookie = jwt.encode(cookie, secret);

        res.cookie("user", JWTCookie);
        res.send({ login: true, userDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function checkPassword(req, res) {
    try {
        const { userID, passwordToCheck } = req.body
        if (!userID || !passwordToCheck) throw new Error("Couldn't get all fields of user from req.body in function checkPassword");

        const userDB = await UserModel.findById(userID)
        if (!userDB) throw new Error("Can't find user in function checkPassword")
        if (!userDB.password) throw new Error("No password in DB in function checkPassword");

        const isMatch = await bcrypt.compare(passwordToCheck, userDB.password);
        if (!isMatch) throw new Error("Password is not match");
        res.send({ matched: true })
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        if (!id) throw new Error("Couldn't get all fields from req.params at function deleteUser");
        const userDB = await UserModel.findByIdAndDelete(id);
        res.send({ userDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function updateDetails(req, res) {
    try {
        const { id } = req.params;
        if (!id) throw new Error("Couldn't get all fields from req.params at function updateDetails");
        const { details } = req.body
        if (!details) throw new Error("Couldn't get all fields from req.body at function updateDetails");
        const userDB = await UserModel.findByIdAndUpdate(id, { firstName: details.firstName, lastName: details.lastName, phoneNumber: details.phoneNumber });
        await userDB.save()
        res.send({ userDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}