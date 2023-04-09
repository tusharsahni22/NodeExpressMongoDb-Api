const UserModel = require("../src/Database/model");
const express = require("express")
const User =new UserModel()


const  addUser = async (req,res)=>{
    console.log(req.body)
    const data =  await User.save(req.body)
    res.send(data)
};
const  findUser =  (req,res)=>{
    const string ="working"
 res.send(string)
};
const  updateUser =  (req,res)=>{
    const string ="working"
 res.send(string)
}

module.exports = {addUser,findUser};