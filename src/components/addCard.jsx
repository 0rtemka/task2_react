import { useState } from 'react'
import styles from './styles/addCard.module.css'

export const AddCard = ({addButtonClick}) => {

    const [card, setCard] = useState({title: '', description: ''})

    return (
        <div className={styles.add_card}>
            <form>
                <label>
                    Введите заголовок:
                    <input name='title' type='text' value={card.title} onChange={(e) => {setCard({...card, title: e.target.value})}}/>
                </label>
                <label>
                    Введите описание:
                    <textarea name='desc' type='text' value={card.description} onChange={(e) => {setCard({...card, description: e.target.value})}}/>
                </label>
                <button 
                    onClick={(e) => {
                        addButtonClick(e, card) 
                        setCard({title: '', description: ''})
                    }}
                >
                    Добавить
                </button>
            </form>
        </div>
    )
}