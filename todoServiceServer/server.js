import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { registerValidation, loginValidation } from "./validation.js";
import { UserController } from './controllers/index.js';
import { handleValidationErrors, checkAuth } from "./utils/index.js";


const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(
        "mongodb+srv://service:service@cluster0.yjsn0vp.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB ok"))
    .catch((err) => console.log("DB error", err));

// register
app.post(
    "/api/v1/users/register",
    registerValidation,
    handleValidationErrors,
    UserController.register
)

// login
app.post(
    "/api/v1/users/login",
    loginValidation,
    handleValidationErrors,
    UserController.login
)

app.get("/api/v1/users/me", checkAuth, UserController.getMe)



const PORT = 5502;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});