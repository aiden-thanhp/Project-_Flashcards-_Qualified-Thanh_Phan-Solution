import React from "react";

export default function Button({  
    type = "button",
    className = "btn btn-secondary",
    icon,
    children,
    handleClick
}) {
    return <button 
        onClick={handleClick}
        type={type} 
        className={`${className} mr-2`} >
            {icon} {children}
        </button>
}