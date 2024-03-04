import React from "react"
import classNames from "classnames";
import "../style/Button.scss"

const Button = ({
    text,
    type,
    size,
    color,
    click,
    name,
}) => {
    return (
        <button
            className={classNames("Button", type, size, color)}
            onClick={click}
            name={name}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    type: "defualt",
    size: "medium",
    color: "white",
};
export default Button;
