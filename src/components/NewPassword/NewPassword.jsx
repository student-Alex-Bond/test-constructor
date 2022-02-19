import React from "react";
import Input from "../Common/Input";
import { Button } from "../Common/Button";
import styles from './NewPassword.module.css'

const NewPassword = () => {
    return (
        <section className={styles.wrapper}>
            <form className={styles.form}>
                <h2>Новый пароль</h2>
                <Input type='text' placeholder="ваш ник" />
                <Input type={'password'} placeholder='новый пароль' />
                <Button>Сохранить новый пароль</Button>
            </form>
        </section >
    )
}

export { NewPassword }