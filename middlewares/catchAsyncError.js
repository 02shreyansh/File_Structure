export const catchAsyncError=(PassedFunc)=>(req,res,next)=>{
    Promise.resolve(PassedFunc(req,res,next)).catch(next);
}