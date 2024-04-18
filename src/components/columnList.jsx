import { useState } from 'react'
import { Card } from './card'
import styles from './styles/columnList.module.css'
import { ColListHeader } from './colListHeader'
import { AddCard } from './addCard'

export const ColumnList = ({header, array}) => {

    const [isShowBtn, setIsShowBtn] = useState(true)
    const [filter, setFilter] = useState("")
    const [cards, setCards] = useState(array)

    const changeStatus = (e, index) => {
        e.preventDefault()
        const newCards = cards.map((v, i) => {
            if (i === index) {
                if (v.status === 'none')
                    v.status = 'in_progress'
                else if (v.status === 'in_progress')
                    v.status = 'finished'
                else
                    v.status = 'none'
            }
            return v
        })

        setCards(newCards)
    }

    const addCard = (e, card) => {
        e.preventDefault()
        setCards([...cards, card])
    }

    const delCard = (index) => {
        const newCards = cards.filter((c, i) => i !== index)
        setCards(newCards)
    }

    return (
        <div className={styles.col_list}>
            <ColListHeader header={header} button={{isShowBtn, setIsShowBtn}} filter={{filter, setFilter}}></ColListHeader>
            {isShowBtn ? 
                cards
                    .filter(e => filter === "" ? e : e.status === filter)
                        .map((s, i) => 
                            <Card key={i} index={i} title={s.title} description={s.description} 
                                    status={s.status} onCardClick={changeStatus} onDelete={delCard}></Card>
                        ) 
            : null}
            <AddCard addButtonClick={addCard}></AddCard>
        </div>
    )
}