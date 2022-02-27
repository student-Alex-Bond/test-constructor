import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonType = DefaultButtonPropsType & {
    customStyle?: Object
    onClick: () => void
}

const Button: React.FC<ButtonType> = ({ onClick, children, customStyle }) => {


    const onClickHandler = () => {
        onClick()
    }
    return (
        <button className={styles.button} style={customStyle} onClick={onClickHandler}>{children}</button>
    );
};

export { Button };