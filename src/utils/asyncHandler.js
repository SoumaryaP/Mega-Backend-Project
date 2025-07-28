
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        promise.resolve().catch((err)=>next(err))
    }
}
//It calls the handler and wraps it in Promise.resolve() to catch any rejected Promises (i.e., async errors).
// it calls next(err) to forward the error to Express’s error handler.
export {asyncHandler}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         });
//     }
// };
