const express = require("express")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const router = express.Router()


router.post('/signup', function(req,res){
    const {name , email , password} = req.body

    if(!name || !email || !password) {
        res.status(422).json({error : " All field required"})
    }
    else {
        User.findOne({email : email})
            .then(savedUser => {
                if(savedUser) {
                    res.status(422).json({error : "user already exist"}) 
                }
                else {
                        bcrypt.hash(password , 12)
                              .then(hashedPassword => {
                                const user = new User({
                                    name : name,
                                    email : email,
                                    password : hashedPassword
                                }) 
                                user.save()
                                    .then(newUser => {
                                        res.status(200).json({msg : "user added "})
                                    }) 
                              })
                }
            })
    }
})

module.exports = router