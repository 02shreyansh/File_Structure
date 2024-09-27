import mongoose from "mongoose";
export const connectDb=async()=>{
    try {
        const {connection}=await mongoose.connect("mongodb://localhost:27017/expressError");
        console.log(`Connected with ${connection.host}`);
    } catch (error) {
        console.log(error);
    }
}