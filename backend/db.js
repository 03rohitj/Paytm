import mongoose from "mongoose";
import POSTGRES_CONNECTION_STRING from "./config";
mongoose.connect(POSTGRES_CONNECTION_STRING);

const {Schema, model} = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 30
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    firstName:{
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    },
    lastName:{
        type: String,
        require: true,
        trim: true,
        maxLength: 50
    } 
});

const User = model('User', UserSchema);

module.exports = {User};