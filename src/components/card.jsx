import styles from './styles/card.module.css'

export const Card = ({index, title, description, status, onCardClick, onDelete}) => {

    return (
        <div className={`${styles.card} ${styles[status]}`} onContextMenu={(e) => { onCardClick(e, index) }}>
            <span className={styles.card_title}>
                {title}
            </span>
            <button className={styles.delete_card} onClick={() => { onDelete(index) }}></button>
            <div className={styles.delimeter}></div>
            <span className={styles.card_desc}>{description}</span>
        </div>
    )
}