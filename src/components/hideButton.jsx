import styles from "./styles/hideButton.module.css";

export const HideButton = ({isShow, onClick}) => {
    return (
        <button className={ isShow ? styles.more_button : styles.less_button } onClick={onClick}></button>
    )
}