import React, { useState } from "react";
import Button from "../elements/Button";
import styled from "styled-components";

const Editor = () => {
    const [text, setText] = useState('');

    const onChangeInput = (e) => {
        setText(e.target.value);
    }

    const clickBtn = (e) => {
        e.preventDefault();
        setText('');
    };
    return (
        <div className="Editor">
            <Form name="edit">
                    <input 
                        type="text"
                        value={text}
                        onChange={onChangeInput}
                        placeholder="Write ToDos..."
                        name={"edit"}
                    />
                    <Button 
                        text={"추가"}
                        type={"add"}
                        size={"medium"}
                        color={"white"}
                        click={() => {}}
                        name={"edit"}
                    />
            </Form>
        </div>
    );
};

export default React.memo(Editor);

const Form = styled.form`
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