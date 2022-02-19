import React from "react";
import styles from './PasswordReset.module.css'
import Input from "../Common/Input";
import { Button } from "../Common/Button";

const PasswordReset = () => {
    return (
        <section className={styles.wrapper}>
            <form className={styles.formik}>
                <h2>Восстановить пароль</h2>
                <Input type='email' placeholder="ваша почта" />
                <Button>Отправить письмо</Button>
            </form>
        </section>
    )
}

export { PasswordReset }