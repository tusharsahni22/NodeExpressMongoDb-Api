const express = require("express")
const router = express.Router();
const {addUser,findUser} = require("../controller/user")
router.use(express.json())
 
router.route("/addUserDetails").post(addUser)
// router.route("/removeUserDetails").get(UserDetails)
// router.route("/removeUserDetails").get(UserDetails)


module.exports =router;