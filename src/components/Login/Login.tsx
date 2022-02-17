import React from 'react';
import styles from './Login.module.css'
import Input from "../Common/Input";
import Button from "../Common/Button";

const Login = () => {

    const authorization = () => {

    }

    return (
        <section className={styles.wrapper}>
            <form className={styles.form}>
                <h2>Авторизация</h2>
                <Input type={'text'} placeholder={'ваш ник'}/>
                <Input type={'password'} placeholder={'ваш пароль'}/>
                <Button type={'submit'} onClick={authorization}>Войти</Button>
            </form>
            <div className={styles.other}>
                <label className={styles.remember}>
                    <input className={styles.checked} type={"checkbox"}/>
                    <span>Запомнить меня</span>
                </label>
                <a href={'ya.ru'}>Забыли пароль?</a>
            </div>

        </section>
    );
};

export default Login;