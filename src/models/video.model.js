import mongoose from "mongoose";
import {Schema} from mongoose
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema(
    {
        videoFile:{
            type:String,
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        owner:[
            {
                type:Schema.Types.ObjectId,
                ref:"User"
            }
        ],
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            required:true
        }

    },{timestamps:true}
)

videoSchema.plugin(mongooseAggregatePaginate)
export const video=mongoose.model("Video",videoSchema)