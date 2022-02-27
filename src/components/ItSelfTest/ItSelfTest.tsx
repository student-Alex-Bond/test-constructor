import React from 'react'
import { Button } from '../Common/Button'
import styles from './ItSelfTest.module.css'

const ItSelfTest = () => {

    const inlineStyle = {
        width: '150px'
    }

    const onClickHandler = () => {

    }

    return (
        <div className={styles.wrapper}>
            <h1>Название теста</h1>
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
                    <Button customStyle={inlineStyle} onClick={onClickHandler}>Выйти</Button>
                    <Button customStyle={inlineStyle} onClick={onClickHandler}>Закончить</Button>
                </section>
            </section>
        </div>
    )
}

export default ItSelfTest
