const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Object,
        required: true,
        ref: 'users'
    }
},
    {
        timestamps: true
    }
)

const Note = mongoose.model("Note", notesSchema)

module.exports = Note