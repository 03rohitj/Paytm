
// routes/index.js : Main router file which handles sub-routers

const express = require("express");
const router = express.Router();
import userRouter from "./user";

router.use("/user", userRouter);        //All the request related to user will be redirected to userRouter




export default router;