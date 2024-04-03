import express from 'express'
import { User } from '../models/user.model.js';

export const Router = express.Router();

Router.get('/',(req,res)=>{
    res.send('Homepage');
})

Router.post('/login',async(req,res)=>{
    try{
        const user=await User.create(req.body);
        console.log(user);
        res.send(user);

    }catch(err){
        console.log(err);
    }
})