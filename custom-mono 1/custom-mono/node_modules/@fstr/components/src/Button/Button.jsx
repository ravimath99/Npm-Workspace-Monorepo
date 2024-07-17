import React from "react"
import "./Button.css";

export const Button = ({ type="", text = "", onClick=()=>{}, className="" }) => {
    return (
        <button type={type} className="btn" onClick={onClick}>
            {text}
        </button>
    )
}