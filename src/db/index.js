import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB=async()=>{
    try {
        const connectionDB=await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
        console.log(`Mongo DB Connected !! Host:${connectionDB.connection.host}`);
    } catch (error) {
        console.log("Error",error)
        process.exit(1)
    }
}

export default connectDB