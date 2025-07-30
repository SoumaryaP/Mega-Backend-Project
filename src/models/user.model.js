import { Schema } from "mongoose"
import mongoose from mongoose
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userSchema=new Schema(
    {
        username:{
            type:String,
            reqired:true,
            index:true,
            unique:true
        },
        email:{
            type:String,
            reqired:true,
            index:true,
            unique:true,
            lowercase:true
        },
        fullname:{
            type:String,
            reqired:true,
            index:true,
            unique:true
        },
        avatar:{
            type:String,
            required:true
        },
        coverimage:{
            type:String,
        },
        password:{
            type:String,
            required:[true,"Password is required"]
        },
        watchHistory:[
            {
                type:Schema.Mongoose.Types.ObjectsId,
                ref:"Video"
            }
        ],
        refreshToken:{
            type:String
        }
    },{timestamps:true}
)


userSchema.pre("save",async function(next){
    if(!this.isModified(this.password)) return next()//only works when the password is mddified
    this.password=bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}//custom methods mongoose lets us create


userSchema.methods.generateAccessToken=function(){
    jwt.sign(
        {
            _id:this._id,
            email:this.email,
            password:this.password,
            fullname:this.fullname
        }
    ),
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
}

userSchema.methods.generateRefreshToken=function(){
    jwt.sign(
        {
            _id:this._id,
        }
    ),
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
}

export const User=mongoose.model("User",userSchema)