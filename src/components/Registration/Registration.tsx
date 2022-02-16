import React from 'react';
import styles from './Registration.module.css'

const Registration = () => {
    return (
        <section className={styles.wrapper}>
            <form className={styles.form}>
                <h2 className={styles.title}>Регистрация</h2>

                <label>
                    <p>Ваш ник</p>
                    <input type={'text'} placeholder={'прекрасный ник'}/>
                </label>
            <label>
                <p>Ваш e-mail</p>
                <input type={'email'} placeholder={'ваша почта'}/>
            </label>
              <label>
                  <p>Пароль</p>
                  <input type={'password'} placeholder={'секретный пароль'}/>
              </label>
                <button onClick={() => {
                    alert('work')
                }} type={"submit"}>Зарегистрироваться
                </button>


            </form>
        </section>
    );
};

export default Registration;