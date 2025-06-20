
// routes/index.js : Main router file which handles sub-routers

const express = require("express");
const mainRouter = express.Router();
const userRouter = require("./user");
const accountRouter = require("./accounts");

mainRouter.use("/user", userRouter);        //All the request related to user will be redirected to userRouter
mainRouter.use("/account", accountRouter);        //All the request related to accounts/transactions will be redirected to accountRouter



module.exports = mainRouter;