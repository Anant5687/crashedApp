const express = require('express')
const user = require('../UserSchema/userSchema')
const router = express.Router()
const generateToken = require('../utils/generateToken')

const app = express()

router.post('/register', async (req, res) => {
    const { name, email,password, pic } = req.body
    if (!name || !email || !password) {
        res.status(404).send("Require all necessary fields")
    }         
    try {
        const preUser = await user.findOne({ email: email })

        if (preUser) {
            res.status(404).json({ message: "User already exists" })
        } 
        else {
            const addUser = await user({
                name, email, password, pic
            })

            await addUser.save()

            res.status(201).json({
                _id: addUser._id,
                name: addUser.name,
                email: addUser.email,
                pic: addUser.pic,
                isAdmin: addUser.isAdmin,
                token:generateToken(addUser._id)
            })
        }
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" })
    }

})

router.post('/login', async (req, res) => {
    
    console.log(req.body)
    const email   = req.body.email;             //email 
    const password = Number(req.body.password); //Password
    if (!email || !password) {
        res.status(404).json({ message: "Please fill all require fields" });
    }

    try {
        const savedUser = await user.findOne({ email: email })
        if (savedUser) {
            if (password === savedUser.password){
                res.status(200).json(
                    {
                    id: savedUser._id,
                    name: savedUser.name,
                    email: savedUser.email,
                    pic: savedUser.pic,
                    isAdmin:savedUser.isAdmin,
                    token:generateToken(savedUser._id)
                }
                 )
                console.log(savedUser)
            } else {
                res.status(404).json({ message: "Your password is not matching" })
            }
        } else {
            res.status(404).json({ message: "You are not registered" })
        }
    } catch (error) {
        res.status(404).json({ message: error })
    }
})

module.exports = router;