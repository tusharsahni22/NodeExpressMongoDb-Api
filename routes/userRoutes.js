const express = require("express")
const router = express.Router();
const {addUser,getUser,getUserByParams} = require("../controller/user")
router.use(express.json())
 
router.route("/addUserDetails").post(addUser)
router.route("/getUserDetails/").get(getUser)
router.route("/getUserDetails/:id").get(getUserByParams)





module.exports =router;