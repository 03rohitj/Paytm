
// routes/index.js : Main router file which handles sub-routers

import { Router } from "express";
const mainRouter = Router();
import {userRouter} from "./user.js";
import {accountRouter} from "./accounts.js";

mainRouter.use("/user", userRouter);        //All the request related to user will be redirected to userRouter
mainRouter.use("/account", accountRouter);        //All the request related to accounts/transactions will be redirected to accountRouter



export default mainRouter;