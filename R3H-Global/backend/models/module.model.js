import mongoose from "mongoose";

const moduleSchema= mongoose.Schema({
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
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
    },
    video:{
        type:String,

    },
    completedBy:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }]

});

export  const Module = mongoose.model('Module',moduleSchema);