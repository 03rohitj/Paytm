const mongoose = require("mongoose");
const POSTGRES_CONNECTION_STRING = requrie("./config");
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

module.exports = { UserModel };