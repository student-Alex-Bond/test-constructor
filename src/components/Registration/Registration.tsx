import React from 'react';
import styles from './Registration.module.css'
import Input from "../Common/Input";
import Button from '../Common/Button';

const Registration = () => {

    const registration =() =>{}

    return (
        <section className={styles.wrapper}>
            <form className={styles.form}>
                <h2 className={styles.title}>Регистрация</h2>
                <Input type={'text'} placeholder={'прекрасный ник'}/>
                <Input type={'email'} placeholder={'ваша почта'} autoComplete={'current-email'}/>
                <Input type={'password'} placeholder={'секретный пароль'} autoComplete={"current-password"}/>
                <Button onClick={registration} type={"submit"}>Зарегистрироваться</Button>
            </form>
        </section>
    );
};

export default Registration;