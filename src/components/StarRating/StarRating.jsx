import styles from './StarRating.module.css';

export const StarRating = () => {
    return <div className={styles['rating-result']}>
        <span className={styles.active}></span>
        <span className={styles.active}></span>
        <span className={styles.active}></span>
        <span></span>
        <span></span>
    </div>
}