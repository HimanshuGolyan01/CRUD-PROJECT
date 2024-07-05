const express = require("express")
const User = require("../models/userModel")
const router = express.Router()
 
router.put("/update",function(req,res){
        const Uid = req.query.Uid
        const {name,email,password} = req.body
        if(!Uid) {
            res.status(422).json({error :" user id not found"})
        }
        User.findByIdAndUpdate(Uid , {name , email , password },{new : true})
            .then(updateUser => {
                res.status(200).json({ msg : "User updated"})
            })

})





module.exports = router