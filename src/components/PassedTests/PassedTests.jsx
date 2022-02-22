import styles from './PassedTests.module.css'

export const PassedTests = () => {
    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <h2>Пройденные тесты</h2>
        </div>
        <div className={styles.tableTitle}>
            <span>Название</span>
            <span>Дата прохождения </span>
            <span>Результат</span>
            <span>Действия</span>
        </div>
        <div className={styles.tableItem}>
            <span>Test1</span>
            <span>15.02.2022</span>
            <span>45 из 50</span>
            <span><button className={styles.btn}>Открыть</button></span>
        </div>
    </div>
}

