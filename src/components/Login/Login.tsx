import React from 'react';
import styles from '../Registration/Registration.module.css'

const Login = () => {
    return (
        <section className={styles.wrapper}>
            <form className={styles.form}>
                <h2 className={styles.title}>Войти</h2>
                <label>
                    <p>Ваш ник</p>
                    <input type={'text'} placeholder={'ваш ник'}/>
                </label>

                <label>
                    <p>Ваш пароль</p>
                    <input type={'password'} placeholder={'ваш ник'}/>
                </label>

                <label>
                    <input type={"checkbox"}/>
                    <p>Запомнить меня</p>
                    <button type={'submit'}>Войти</button>
                </label>


                <a href={'ya.ru'}>Забыли пароль?</a>
            </form>
        </section>
    );
};

export default Login;