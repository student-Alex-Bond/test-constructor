import React from 'react'
import { Button } from '../Common/Button'
import styles from './ItSelfTest.module.css'

const ItSelfTest = () => {

    const onClickHandler = () => {

    }

    return (
        <div className={styles.wrapper}>
            <h2>Название теста</h2>
            <section className={styles.test}>
                <div className={styles.testItem}>
                    <span>1.</span>
                    <span>Сам вопрос</span>
                    <label className={styles.answer}>
                        <input type={'checkbox'} />
                        Вариант ответа
                    </label>
                    <label className={styles.answer}>
                        <input type={'radio'} />
                        Вариант ответа
                    </label>
                    <label className={styles.answer}>
                        <input type={'radio'} />
                        Вариант ответа
                    </label>

                </div>
                <section className={styles.btn}>
                    <Button onClick={onClickHandler}>Выйти</Button>
                    <Button onClick={onClickHandler}>Закончить</Button>
                </section>
            </section>
        </div>
    )
}

export default ItSelfTest
