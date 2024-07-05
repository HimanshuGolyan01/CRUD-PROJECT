const express = require("express")
const router = express.Router()
const User = require("../models/userModel")

router.delete("/delete",function(req,res){
    const Uid = req.query.Uid
    if(!Uid) {
        res.status(422).json({error : "User id not found"})
    }

    User.findByIdAndDelete(Uid)
        .then(userDeleted => {
            res.status(200).json({ msg : "User deleted"})
        })
})





module.exports = router