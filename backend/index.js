require('dotenv').config()
const express = require('express')
const cors = require('cors')
 require('./data/Db')
 const router = require('./Routes/Routes')
const noteRouter = require('./Routes/userRoute')

const port = 9090
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)
app.use(noteRouter)

app.listen(port, ()=>{
    console.log(`Server is runing at ${port}`)
}) 