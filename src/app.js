const express = require("express");
const app = express();
require("../src/Database/connection")
const userDetail = require("../routes/userRoutes")

const port = process.env.PORT || 3000


app.use("/user",userDetail)

const start = async (req,res) => {
  try {
    await app.listen(port,()=>{
        console.log(`Started at ${port} `)
    });
  } catch (error) {
    console.log(error);
  }
};

start();
