import React from 'react';
import style from './Input.module.css'
type InputType = {
    type: string
    autoComplete?: string
    placeholder: string
}

const Input = (props: InputType) => {
    return (
        <input className={style.input} type={props.type}
               autoComplete={props.autoComplete}
               placeholder={props.placeholder}
        />

    );
};

export default Input;