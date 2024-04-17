import styles from './styles/card.module.css'

export const Card = ({title, description, status}) => {

    return (
        <div className={`${styles.card} ${styles[status]}`} >
            <span className={styles.card_title}>{title}</span>
            <div className={styles.delimeter}></div>
            <span className={styles.card_desc}>{description}</span>
        </div>
    )
}