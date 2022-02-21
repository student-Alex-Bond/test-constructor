import React from 'react'
import { Button } from '../Common/Button'
import styles from './MyTests.module.css'

export const MyTests = () => {
    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <h2>Мои тесты</h2>
            <div className={styles.btn}>
                <Button >Создать тест</Button>
            </div>
        </div>
        <div className={styles.tableTitle}>
            <span>Название</span>
            <span>Дата создания</span>
            <span>Сложность</span>
            <span>Действия</span>
        </div>
        <div className={styles.tableItem}>
            <span>Test1</span>
            <span>15.02.2022</span>
            <span>4 из 5</span>
            <span>Действия</span>
        </div>
    </div>
}