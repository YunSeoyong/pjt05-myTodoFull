// ToDoController.js
const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.saveToDo = async (req, res) => {
    // const { content } = req.body

    // ToDoModel
    //     .create({ content })
    //     .then((data) => {
    //         console.log("Added Successfully...");
    //         console.log(data);
    //         res.send(data);
    //     });
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
    // const {_id, content} = req.body;
    // ToDoModel
    //     .findByIdAndUpdate(_id, {content})
    //     .then(() => res.send('Updated Successfully...'))
    //     .catch((err) => console.log(err));
    const { _id, content, isDone } = req.body;
    try {
        const updatedToDo = await ToDoModel.findByIdAndUpdate(_id, { content, isDone }, { new: true });
        res.json(updatedToDo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports.deleteToDo = async (req, res) => {
    // const {_id, content} = req.body;
    // ToDoModel
    //     .findByIdAndDelete(_id)
    //     .then(() => res.send('Deleted Successfully...'))
    //     .catch((err) => console.log(err));
    const { _id } = req.body;
    try {
        await ToDoModel.findByIdAndDelete(_id);
        res.json({ message: 'Deleted Successfully...' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};