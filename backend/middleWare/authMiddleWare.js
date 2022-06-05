const jwt = require('jsonwebtoken')
const user = require('../UserSchema/userSchema')
const asyncHandeler = require('express-async-handler')


const protect = asyncHandeler(async (req, res, next) => {
    let token;

if(
    req.headers.authorization && 
    req.headers.authorization.startsWith("Bearer")
)    {
    try {
        token = req.headers.authorization.split(" ")[1]

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await user.findById(decode.id).select('-password')

        next()
    } catch (error) {
        res.status(404).json(error)
        console.log(error)
    }
}

if(!token){
    res.status(401).json("Not authorized no token")
}
})

module.exports ={ protect}