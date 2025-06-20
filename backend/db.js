import mongoose from "mongoose";
import {POSTGRES_CONNECTION_STRING} from "./config.js";
mongoose.connect(POSTGRES_CONNECTION_STRING);

const {Schema, model} = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 5,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    } 
});

const UserModel = model('User', UserSchema);

const AccountSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    }
});
const AccountModel = model('Account', AccountSchema);

export { UserModel, AccountModel };