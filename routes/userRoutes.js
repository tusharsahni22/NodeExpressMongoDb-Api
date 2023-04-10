const express = require("express")
const router = express.Router();
const {addUser,getUser,getUserByParams,updateUser,deleteUser} = require("../controller/user")
router.use(express.json())
 
router.route("/addUserDetails").post(addUser)
router.route("/getUserDetails/").get(getUser)
router.route("/getUserDetails/:id").get(getUserByParams)
router.route("/updateUserDetails/:id").post(updateUser)
router.route("/deleteUser/:id").patch(deleteUser)





module.exports =router;