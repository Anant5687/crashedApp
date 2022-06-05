const express = require('express')
const { protect } = require('../middleWare/authMiddleWare')
const router = express.Router()
const Note = require('../UserSchema/noteSchema')


router.get('/getData', protect, async (req, res) => {
    try {
        const note = await Note.find({user:req.user._id})
        res.status(200).json( note)
    } catch (error) {
        res.status(404).json(error)
    }
})


router.post("/createNotes", protect, async(req, res)=>{
    const {category, content, title} = req.body

    if(!category || !content || !title){
        res.status(404).json("Require fields are empty")
    }else{
        const note = new Note({user:req.user._id,category, content, title })
        const createNote = await note.save()
        res.status(201).json(createNote)
    }
})



module.exports = router