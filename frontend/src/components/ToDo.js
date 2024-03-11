// ToDo.js
import React, { useState } from "react";

import Button from "../elements/Button";
import { updatingToDo, deletingToDo } from "../utill/HandleApi";

const ToDo = ({
    _id,
    content,
    isDone,
    date,
    setToDo,
}) => {
    const [localContent, setLocalContent] = useState(content);
    const [isUpdate, setIsUpdate] = useState(false);

    const handleContentChange = (e) => {
        setLocalContent(e.target.value);
    }

    const handleUpdateToDo = () => {
        updatingToDo(_id, localContent, isDone, setToDo);
        setIsUpdate(false);
    }

    const handleCheckboxChange = () => {
        updatingToDo(_id, content, !isDone, setToDo);
    }

    const handleDeleteToDo = () => {
        deletingToDo(_id, setToDo);
    }



    return (
        <li>
            <div className="li_in">
                <div className="contents">
                    <div className="check">
                        <input 
                            type="checkbox"
                            id={`done-${_id}`}
                            checked={isDone}
                            placeholder="isDone"
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={`done-${_id}`}></label>
                    </div>
                    <div className="memo">
                        {isUpdate ? (
                            <>
                                <input
                                    type="text" 
                                    value={localContent}
                                    onChange={handleContentChange}
                                    placeholder="UpDating..."
                                />
                            </>
                        ) : (
                            <p className={isDone ? "text done" : "text"}>{content}</p>
                        )}
                        <p className="date">{new Date(date).toLocaleString()}</p>
                    </div>
                </div>
                <div className="form">
                    {isUpdate ? (
                        <>
                            <Button 
                                text={"취소"}
                                type={"edit"}
                                size={"small"}
                                color={"edit"}
                                click={() => {setIsUpdate(false)}}
                                name={"edit"}
                            />
                            <Button 
                                text={"완료"}
                                type={"delete"}
                                size={"small"}
                                color={"theme"}
                                click={handleUpdateToDo}
                                name={"delete"}
                            />
                        </>
                    ) : (
                        <>
                            <Button 
                                text={"수정"}
                                type={"edit"}
                                size={"small"}
                                color={"edit"}
                                click={() => {setIsUpdate(true)}}
                                name={"edit"}
                            />
                            <Button 
                                text={"삭제"}
                                type={"delete"}
                                size={"small"}
                                color={"theme"}
                                click={handleDeleteToDo}
                                name={"delete"}
                            />
                        </>
                    )}
                    
                </div>
            </div>
        </li>
    );
};

export default React.memo(ToDo);