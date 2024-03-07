// ToDoController.js
const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find().sort({date: -1});
        res.send(toDo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.saveToDo = async (req, res) => {
    const { content, date, isDone } = req.body;
    const newToDo = new ToDoModel({ content, date, isDone });
    try {
        const savedToDo = await newToDo.save();
        res.status(201).json(savedToDo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.updateToDo = async (req, res) => {
    const { _id, content, date, isDone } = req.body;
    try {
        const updatedToDo = await ToDoModel.findByIdAndUpdate(_id, { content, date, isDone }, { new: true });
        res.json(updatedToDo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    try {
        await ToDoModel.findByIdAndDelete(_id);
        res.json({ message: 'Deleted Successfully...' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};