const UserModel = require("../src/Database/model");
const express = require("express")


const  addUser = async (req,res)=>{
    const data =new UserModel(req.body)
    data.save() 
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