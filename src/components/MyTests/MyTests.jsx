import React from 'react'
import { Button } from '../Common/Button'
import { StarRating } from '../StarRating/StarRating'
import styles from './MyTests.module.css'
import deleteIcon from '../../date/delete.png'
import renameIcon from '../../date/rename.png'


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
            <span>Дата создания </span>
            <span>Сложность</span>
            <span>Действия</span>
        </div>
        <div className={styles.tableItem}>
            <span>Test1</span>
            <span>15.02.2022</span>
            <span><StarRating /></span>
            <span>
                <img className={styles.renameIcon}
                    src={renameIcon}
                    alt={'rename'}
                    title='Нажмите чтобы перемеименовать название теста' />
                <img className={styles.deleteIcon}
                    src={deleteIcon}
                    alt={'delete'}
                    title='Нажмите чтобы удалить тест' />
            </span>
        </div>
    </div>
}