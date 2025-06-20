//User router file

const Router = require("express");
const bcrypt = require("bcrypt");
const z = require("zod"); 
const { UserModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

const signupZodSchema = z.object({
    username: z.string().trim().min(5,"Username must be atleast 5 characters long").max(30,"Username must be at max 30 characters long"),
    password: z.string().trim().min(6,"Password must be atleast 6 characters long"),
    firstName: z.string().trim()
});

const signinZodSchema = z.object({
    username : z.string().trim().min(5,"Username must be atleast 5 characters long").max(30,"Username must be at max 30 characters long"),
    password: z.string().trim().min(6,"Password must be atleast 6 characters long")
});

const router = Router();

//All the the user related routes are handled here : /api/v1/user/...
router.post("/signin", async (req, res) => {
    const success = signinZodSchema.parse(req.body);
    if(!success){
        return res.status(411).json({
            message : "Invalid inputs"
        });
    }

    const foundUser = await UserModel.findOne(req.body.username);

    if(!foundUser){
        console.error(">>>>SignIn : User not found");
        return res.status(411).json({
            message : "Invalid username, user not found"
        });
    }

    const validCredentials = bcrypt.compare(password, foundUser.password);
    if(!validCredentials){
        return res.status(411).json({
            message : "Invalid Password"
        });
    }
    console.log("SignIn : User found", foundUser);

    const token = jwt.sign({
        userId: foundUser._id
    }, JWT_SECRET, { expiresIn: '1h' });

    console.log(">>>>>SignIn JWT : ", token);
});

router.post("/signup", async(req, res) => {

    //parse req through zod
    const result = signupZodSchema.safeParse(req.body);

    //Validate if inputs are correct
    if(!result){
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
    console.log(">>>>>>>Signup UserId : ", userId);

    return res.status(200).json({
        message: "User created successfully!",
        UserId: userId
    });

});

router.post("/profile", (req, res) => {

});

export default router;

