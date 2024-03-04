import axios from 'axios';

const baseUrl = "http://localhost:5000"
const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({data}) => {
            console.log('data ---->', data);
            setToDo(data)
        });
};

const addToDo = (content, setContent, setToDo) => {
    axios
        .post(`${baseUrl}/save`, {content})
        .then((data) => {
            console.log(data);
            setContent("");
            getAllToDo(setToDo);
        })
}

export { getAllToDo, addToDo };