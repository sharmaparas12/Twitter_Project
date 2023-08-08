import mongoose from 'mongoose';
const User_schema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    name:{
        type:String,
        required:true
    }

   

},{timestamps:true});

const User=mongoose.model('User',User_schema);

export default User;