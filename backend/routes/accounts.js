import { Router } from "express";
import { authMiddleware } from "../middleware";
import { AccountModel } from "../db";

const router = Router();

router.get("/balance", authMiddleware, async(req, res) => {
    const userId = req.userId;

    console.log(">>>>>balance, userId : ", userId);
    const account = await AccountModel.findOne({
        userId: userId
    });

    return res.status(200).json({
        balance: account.balance
    });
})

module.exports = router;