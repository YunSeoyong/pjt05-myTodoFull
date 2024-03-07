// ToDoModel.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    isDone: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('ToDo', todoSchema);