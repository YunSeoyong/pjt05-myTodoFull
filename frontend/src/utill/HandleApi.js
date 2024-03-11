// HandleApi.js
import axios from 'axios';

const baseUrl = "http://localhost:5000"
const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({data}) => {
            // console.log('data ---->', data);
            const sortedData = data.sort((a, b) => {
                if(a.isDone && !b.isDone) {
                    return 1;
                } else if (!a.isDone && b.isDone) {
                    return -1;
                } else {
                    return 0;
                }
            });
            setToDo(sortedData);
        })
        .catch(err => console.log(err));
};

const addToDo = (content, setContent, setToDo) => {
    const currentDate = new Date();
    axios
        .post(`${baseUrl}/save`, {content, date: currentDate})
        .then((response) => {
            const newTodo = response.data;
            setContent("");
            setToDo((prev) => ([newTodo, ...prev]));
        })
        .catch(err => console.log(err));
};

const updatingToDo = (id, content, isDone, setToDo) => {
    axios
        .put(`${baseUrl}/update/${id}`, {_id: id, content, isDone})
        .then((response) => {
            console.log('ToDo updated successfully');
            const updatedToDo = response.data;
            if (isDone) {
                setToDo(prev => {
                    const updatedList = prev.filter(todo => todo._id !== id);
                    return [...updatedList, updatedToDo];
                });
            } else {
                setToDo(prevTodos => prevTodos.map(todo => (todo._id === id ? updatedToDo : todo)));
            }
            getAllToDo(setToDo);
        })
        .catch(err => console.log(err));
};

const deletingToDo = (id, setToDo) => {
    axios
        .delete(`${baseUrl}/delete/${id}`, {_id: id})
        .then(() => {
            console.log(`ToDo ${id} deleted successfully`);
            setToDo(prevToDos => prevToDos.filter(todo => todo._id !== id));
        })
        .catch(err => console.log(err));
}


export { getAllToDo, addToDo, updatingToDo, deletingToDo };