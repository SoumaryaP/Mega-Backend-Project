import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app={express}
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
//cors is used to connect the frontend to backend (making requests)
app.use(express.json({limit:"16kb"}))//maximum limit is 16kb
app.use(express.urlencoded({extended:"true",limit:"16kb"}))//extended is used for nested objects
app.use(express.static("public"))

//MiddleWare:It is used when a req is sent to the user and response is recived on the other side.In between parsing we have to check whether the user is logged in or not.This is using four options(err,req,res,next).The next is a flag that checks whether the the reqest can move to the next request

app.use(cookieParser())
export {app}