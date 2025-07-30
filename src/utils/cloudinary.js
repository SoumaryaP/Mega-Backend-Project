import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
})

const uploadOnCloudinary=async (localFilePath) =>{
   try {
     if(!localFilePath) return null;
    //no local file path is found
    cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    //file is uploaded
    console.log("File is uploaded")
   } catch (error) {
        fs.unlinkSync(localFilePath)
        //removed the temporary local file path as the upload file operartion get failed 
        //unlink is used for this purpose
   }
}