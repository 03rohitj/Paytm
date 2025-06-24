import { JWT_SECRET } from "./config.js";

import jwt from "jsonwebtoken";

export function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;
    console.log("AuthMiddleware : ", req.headers);
    //console.log(">>>>AuthMiddleware token : ", localStorage.getItem("token"));

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message : "UnAuthorized Access"
        });
    }

    const authToken = authHeader.split(' ')[1];     //fetch token

    console.log(">>>>>Middleware AuthToken : ", authToken);
    try{
        const decoded = jwt.verify(authToken, JWT_SECRET);
        if(!decoded.userId){
            return res.status(403).json({
                message : "UnAuthorized Access"
            });
        }
        //Attach userId in req for further use
        req.userId = decoded.userId;
        console.log("Auth. Passed, Decoded userId : ", req.userId);

        next();
    }catch( err ){
        return res.status(403).json({
            message : "Authorization Error : ", err
        });
    }
}