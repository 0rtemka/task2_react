import styles from "./styles/hideButton.module.css";

export const HideButton = ({isShow, setIsShow}) => {

    const onHideButtonClick = () => {
        setIsShow(!isShow)
    }

    return (
        <button className={ isShow ? 
            `${styles.hide_button} ${styles.more_button}` : 
            `${styles.hide_button} ${styles.less_button}` 
        } onClick={onHideButtonClick}></button>
    )
}