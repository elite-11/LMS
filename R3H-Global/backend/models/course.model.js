import mongoose from "mongoose";

const courseSchema= mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    desc:{
        type:String,
        required:true,
        trim:true,

    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        

    },
    module:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Module',
    }]
});

export  const Course = mongoose.model('Course',courseSchema);