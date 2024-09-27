import mongoose from "mongoose";
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please Enter Name"],
    },
    email:{
        type:String,
        required:[true,"please Enter Email"],
        unique:true
    }
})
export const User=mongoose.model("User",schema)