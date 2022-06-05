const mongoose = require('mongoose')

const Db = "mongodb+srv://Anant:5687Anant@cluster0.kxxxe.mongodb.net/MernNoteZipper?retryWrites=true&w=majority"

mongoose.connect(Db).then(()=>console.log(`connected with mongo db`)).catch((err)=>{
    console.log(err)
})