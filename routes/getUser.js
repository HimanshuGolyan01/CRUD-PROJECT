const express = require("express")
const User = require("../models/userModel")
const router = express.Router()

router.get("/fetch",function(req,res){
    // console.log("this is fetch request")

        User.find({})
            .then(response =>{
                 if(response) {
                     res.status(200).json({response})
                 }
            })
            .catch(npromise => {
                res.status(422).json({error :"Database is empty"})
            })
})



module.exports = router