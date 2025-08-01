import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path:"./.env"
})

connectDB().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log(`Mongo Db failed to connect`)
})




/*
import express from "express"
const app=express()
( async()=>{
    try{
       await mongoose.connect(`$(process.env.MONGO_DB_URI)/$(DB_NAME)`)
       app.on("error",(error)=>{
        console.log("ERRR:",error)
        throw error
       })
       app.listen(process.env.port,()=>{
        console.log(`App is listening on port ${process.env.port}`);
       })

    }catch(error){
        console.log("Err:",error)
        throw err
    }
})()*/