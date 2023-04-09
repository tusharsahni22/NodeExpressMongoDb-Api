const mongoose =require("mongoose");
const validator = require("validator")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        
    },
    phone:{
        type:String,
        minlength:3,
        
    },
    address:{
        type:String,
        minlength:3,
        
    },
    gender:{
        type:String,
        minlength:1,
        
    },
    age:{
         type: Number, 
         min: 18, 
         max: 65 ,
        
    },
    updatedAt:{
         type: Date, 
         default: Date.now },
})

const UserModel = new mongoose.model('UserModel',userSchema);

module.exports = UserModel;