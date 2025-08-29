import { Router } from "express";
import userRoute from "../user/user.router";

const routers = Router();

routers.use("/user", userRoute);

export default routers;
