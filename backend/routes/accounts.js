import { json, Router } from "express";
import { authMiddleware } from "../middleware.js";
import { AccountModel } from "../db.js";
import { number, string, z } from "zod";
import mongoose from "mongoose";

const accountRouter = Router();

accountRouter.get("/balance", authMiddleware, async(req, res) => {
    const userId = req.userId;

    console.log(">>>>>balance, userId : ", userId);
    const account = await AccountModel.findOne({
        userId: userId
    });

    return res.status(200).json({
        balance: account.balance
    });
});

const transferZodSchema = z.object({
    to: string().trim(),
    amount: number().min(1, "Amount should be +ve value")
});
accountRouter.post("/transfer", authMiddleware, async(req,res) => {
    const {success} = transferZodSchema.safeParse(req.body);
    if(!success){
        return json.status(400).json({
            message: "Invalid Input"
        });
    }

    //We need to use transactions here for integrity 
    const session = await mongoose.startSession()
    session.startTransaction();
    
    const {to, amount} = req.body;
    const fromAccount = AccountModel.findOne({userId: req.userId}).session(session);
    if(!fromAccount || fromAccount.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = AccountModel.findOne({userId: to}).session(session);
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid Account"
        });
    }

    //perform the transfer
    await AccountModel.updateOne({userId: req.userId}, {$inc: {balance: -amount} }).session(session);
    await AccountModel.updateOne({userId: to}, {$inc: {balance: amount} }).session(session);

    //Commit the transaction
    await session.commitTransaction();
    
    res(200).json({
        message: "Transfer Successful"
    });

});

export  {accountRouter};