import React from "react";

interface Props {
    children: string;
    color?: "primary" | "secondary" | "warning" | "danger"; // <--- to limited the options. Needs to be one of these
    onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
    return (
        <button className={"btn btn-" + color} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
