import React from 'react'
import './index.css';


const Button = ({ children, type, disabled, className, onClick }) => {
    return <button onClick={onClick} disabled={disabled} type={type} className={`btn ${className ?? ''}`}>{children}</button>
}

export default Button