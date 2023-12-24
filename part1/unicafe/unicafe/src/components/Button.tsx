import React from "react";

interface ButtonProps {
    text: string,
    onClick: () => void
};

const Button: React.FC<ButtonProps> = (props) => {
    console.log(props.text);
    return (
        <div>
            <button onClick={props.onClick}>
                {props.text}
            </button>

        </div>
    )
}

export default Button;