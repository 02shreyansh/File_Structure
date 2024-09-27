import ErrorHandler from "../utils/errorHandler.js"
import { User } from "../model/User.js"
import { catchAsyncError } from "../middlewares/catchAsyncError.js"
const newUser=catchAsyncError(async (req,res,next)=>{
    const user=await User.findOne({email:"shreyansh@gmail.com"})
    if(user){
        return next(new ErrorHandler("User Already Exist",400))
    }
    await User.create({
        name:"Shreyansh",
        email:"shreyansh@gmail.com",
    })
    res.status(201).json({
        success:true,
        message:"User Created Successfully"
    })
})
export {newUser}