import React from 'react';
import './index.css';


const Input = React.forwardRef((props, ref) => {
    const { type, value, onChange, labelText, id, name, required = false, 
        className, placeHolder, pattern, maxLength, checked, getLabelContent, selected, min, max } = props;
    
    const labelContent = getLabelContent && getLabelContent();
    return (<div className={`input-wrapper ${className ?? ''}`}>
        {labelText ? <label htmlFor={id}>{labelText}{required ? '*' : ''}</label> : null}
        {labelContent ? <label htmlFor={id}>{labelContent}</label> : null}
        <input
            ref={ref}
            placeholder={placeHolder} 
            name={name} 
            id={id} type={type} 
            value={value} 
            onChange={onChange} 
            required={required}
            pattern={pattern}
            maxLength={maxLength}
            checked={checked}
            selected={selected}
            min={min}
            max={max}
        />
    </div>)
    });


export default Input