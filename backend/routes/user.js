//User router file

import { authMiddleware } from "../middleware.js";

import {Router} from "express";
import bcrypt from "bcrypt";
import z from "zod"; 
import { UserModel, AccountModel } from "../db.js";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../config.js";

const signupZodSchema = z.object({
    username: z.string().trim().min(5,"Username must be atleast 5 characters long").max(30,"Username must be at max 30 characters long"),
    password: z.string().trim().min(6,"Password must be atleast 6 characters long"),
    firstName: z.string().trim(),
    lastName: z.string().trim()
});

const signinZodSchema = z.object({
    username : z.string().trim().min(5,"Username must be atleast 5 characters long").max(30,"Username must be at max 30 characters long"),
    password: z.string().trim().min(6,"Password must be atleast 6 characters long")
});

const userRouter = Router();

//All the the user related routes are handled here : /api/v1/user/...
userRouter.post("/signin", async (req, res) => {
    const {success} = signinZodSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message : "Invalid inputs"
        });
    }

    const foundUser = await UserModel.findOne({username: req.body.username});

    if(!foundUser){
        console.error(">>>>SignIn : User not found");
        return res.status(411).json({
            message : "Invalid username, user not found"
        });
    }

    const validCredentials = bcrypt.compare(req.body.password, foundUser.password);
    if(!validCredentials){
        return res.status(411).json({
            message : "Invalid Password"
        });
    }
    console.log("SignIn : User found", foundUser.username);

    const token = jwt.sign({
        userId: foundUser._id
    }, JWT_SECRET, { expiresIn: '1h' });

    console.log(">>>>>SignIn JWT : ", token);
    return res.status(200).json({
        message: "Successfully signin",
        token: token
    });

});

userRouter.post("/signup", async(req, res) => {

    //parse req through zod
    const {success} = signupZodSchema.safeParse(req.body);

    //Validate if inputs are correct
    if(!success){
        return res.status(411).json({
            message: "Invalid Inputs/username already taken"
        });
    }

    //verify if user exists
    const existingUser = await UserModel.findOne({
        username: req.body.username
    });

    //return error if user exists
    if(existingUser){
        return res.status(411).json({
            message : "Error, User already exists"
        });
    }

    //all validations passed? perform signup
    const newUser = await UserModel.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    const userId = newUser._id;
    const newUserAccount = await AccountModel.create({
        balance: 500,
        userId: userId
    });

    console.log(">>>>>>>Signup UserId : ", userId, " - AccountId : ", newUserAccount._id);

    return res.status(200).json({
        message: "User created successfully!",
        UserId: userId
    });

});

//zod schema validation when updating user profile
const updateBodySchema = z.object({
    password: z.string().trim().min(6,"Password must be atleast 6 characters long").optional(),
    firstName: z.string().trim().optional(),
    lastName: z.string().trim().optional()
});

userRouter.post("/profile", authMiddleware ,async (req, res) => {

    console.log(">>>>Profile req.userId: ", req.userId);
    const {success} = updateBodySchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message : "Error updating information, Invalid Data"
        });
    }
    
    console.log(">>>Profile, req.body : ", req.body);

    const result = await UserModel.findByIdAndUpdate(req.userId, req.body);
    console.log(">>>Profile, Update Status : ", result);

    return res.status(201).json({
        message : "User Updated Successfully"
    });
});

//Get bulk of users based on filter(E.g. if we type 'ro' then all the users with fname or lname have 'ro' should appear)
userRouter.get("/bulk", async (req, res) =>{
    const filter = req.query.filter || "";
    //Find record using regex, similar to sql 'like' query
    const users = await UserModel.find({
        $or: [
                {
                   firstName: { "$regex": filter, $options: 'i' }       //$options 'i' indicate case insensitive
                },
                {
                   lastName: { "$regex": filter, $options: 'i' }
                }
             ]
    });

    return res.status(200).json({
        user: users.map( user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    });
})

export {userRouter};

