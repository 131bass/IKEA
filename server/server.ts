import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json())
app.use(cookieParser());
dotenv.config();

const mongodb_uri = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose
    .connect(mongodb_uri)
    .then((res) => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log("At mongoose.connect:");
        console.error(err.message);
    });

import usersRoutes from "./API/users/userRoutes";
app.use("/api/users", usersRoutes);
import productsRoutes from "./API/products/productRoutes";
app.use("/api/products", productsRoutes);

app.listen(PORT, () => {
    console.log(`server is active on port : ${PORT}`);
});
