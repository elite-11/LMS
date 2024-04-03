import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
        trim: true,
      },
    coursesMade:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
    }],
    
    coursesTaken:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
    }]
});

export   const User = mongoose.model('User',userSchema);