const mongoose = require("mongoose");

const user=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    avatar:{
        type:String,
        default:"C:/Users/ritul/Downloads/80ef9e7d-c048-494e-9779-e4d679493bbd.jpg",
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"],
    },
    favourites:[
    {
        type:mongoose.Types.ObjectId,
        ref:"books",
    },
],
    cart:[
    {
        type:mongoose.Types.ObjectId,
        ref:"books",
    },
],
orders:[
    {
        type:mongoose.Types.ObjectId,
        ref:"order",
    },
],
},
{timestamps: true}
);

module.exports=mongoose.model("user",user);