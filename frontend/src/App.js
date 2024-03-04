import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import { getAllToDo, addToDo } from './utill/HandleApi';

import './App.scss'
import Header from "./components/Header";
import ToDo from './components/ToDo';
import Button from './elements/Button';

function App() {

    const [toDo, setToDo] = useState([]);
    const [content, setContent] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        getAllToDo(setToDo);
    }, []);

    return (
        <div className="App">
            <Header />
            <div className="Editor">
                <Form name="edit">
                    <input
                        type="text"
                        value={content}
                        onChange={(e) => {setContent(e.target.value)}}
                        placeholder="Write ToDos..."
                        name={"edit"}
                    />
                    <Button
                        text={"추가"}
                        type={"add"}
                        size={"medium"}
                        color={"white"}
                        click={() => {addToDo(content, setContent, setToDo)}}
                        name={"edit"}
                    />
                </Form>
            </div>
            <ul>
                {toDo.map((todo) =>
                    <ToDo
                        key={todo._id}
                        {...todo}
                        isEdit={isEdit}
                        setIsEdit={setIsEdit}
                    />
                )}
            </ul>
        </div>
    );
}

export default App;

const Form = styled.div`
    position: relative;
    min-width: 300px;
    width: 70vw;
    max-width: 500px;
    margin: 0 auto 40px auto;
    
    input{
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        padding: 0 1.2rem;
        border-radius: 0.5rem;
        border: 1.5px solid var(--theme-color);
        font-size: var(--font-sm);
        color: var(--theme-dark);

        &::placeholder{
            color: var(--theme-color);
        }
        &:focus{
            outline: none;
        }
    }
    .Button{
        position: absolute;
        right: 0;
        top: 0;
    }
`;
