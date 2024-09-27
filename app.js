import express from "express"
import userRouter from './routes/user.js'
import errorMiddleware from "./middlewares/Error.js";
import { connectDb } from "./Config/database.js";
const app=express();
app.use("/user",userRouter)
const port=process.env.PORT || 4000;
connectDb();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
app.use(errorMiddleware)