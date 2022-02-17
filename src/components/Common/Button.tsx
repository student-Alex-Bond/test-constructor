import React, {ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import style from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonType =DefaultButtonPropsType & {

    onClick: () => void
}

const Button: React.FC<ButtonType> = ({ onClick, children}) => {

    const onClickHandler =() => {
        onClick()
    }
    return (
        <button className={style.button} onClick={onClickHandler}>{children}</button>
    );
};

export default Button;