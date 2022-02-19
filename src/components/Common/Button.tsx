import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonType = DefaultButtonPropsType & {

    onClick: () => void
}

const Button: React.FC<ButtonType> = ({ onClick, children, style }) => {



    const onClickHandler = () => {
        onClick()
    }
    return (
        <button className={styles.button + ' ' + style} onClick={onClickHandler}>{children}</button>
    );
};

export { Button };