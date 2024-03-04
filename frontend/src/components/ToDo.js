import React, { useState } from "react";

import Button from "../elements/Button";

const ToDo = ({
    _id,
    content,
    isDone,
    date,

}) => {
    const [isEdit, setIsEdit] = useState(false);

    
    // // 삭제버튼
    // const clickBtnDel = () => {
    //     props.onDeleteTodo(props.id);
    // };
    // // 완료체크
    // const handleToggleIsDone = () => {
    //     props.onToggleDone(props.id);
    // }
    // // 수정여부
    // const toggleIsEdit = () => {setIsEdit(!isEdit)};
    // // 수정취소
    // const clickBtnEditQuit = () => {
    //     setIsEdit(false);
    //     setLocalContent(props.content);
    // }
    // // 수정완료
    // const clickBtnEdit = () => {
    //     props.onEditTodo(props.id, localContent);
    //     toggleIsEdit();
    // };

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
                            onChange={() => {}}
                        />
                        <label htmlFor={`done-${_id}`}></label>
                    </div>
                    <div className="memo">
                        {isEdit ? (
                            <>
                                <input
                                    type="text" 
                                    value={''}
                                    onChange={() => {}}
                                    placeholder="수정할 내용을 입력해주세요."
                                />
                            </>
                        ) : (
                            <p className={isDone ? "text done" : "text"}>{content}</p>
                        )}
                        <p className="date">{date}</p>
                    </div>
                </div>
                <div className="form">
                    {isEdit ? (
                        <>
                            <Button 
                                text={"취소"}
                                type={"edit"}
                                size={"small"}
                                color={"edit"}
                                click={() => {}}
                                name={"edit"}
                            />
                            <Button 
                                text={"완료"}
                                type={"delete"}
                                size={"small"}
                                color={"theme"}
                                click={() => {}}
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
                                click={() => {}}
                                name={"edit"}
                            />
                            <Button 
                                text={"삭제"}
                                type={"delete"}
                                size={"small"}
                                color={"theme"}
                                click={() => {}}
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