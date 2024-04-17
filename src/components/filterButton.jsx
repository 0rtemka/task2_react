import { useState } from 'react'
import styles from './styles/filterButton.module.css'

export const FilterButton = ({filter, setFilter}) => {

    const [buttonStyle, setButtonStyle] = useState('all')

    const onButtonClick = () => {
        if (filter === "finished") {
            setFilter("")
            setButtonStyle('all')
        }
        else if (filter === "") {
            setFilter("in_progress")
            setButtonStyle('in_progress')
        }
        else {
            setFilter("finished")
            setButtonStyle('finished')
        }
    }

    return (
        <button className={`${styles.filter_button} ${styles[buttonStyle]}`} onClick={onButtonClick}></button>
    )
}