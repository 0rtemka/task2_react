import { useState } from 'react'
import { Card } from './card'
import { HideButton } from './hideButton'
import { FilterButton } from './filterButton'

export const ColumnList = ({header, array}) => {

    const [isShowBtn, setIsShowBtn] = useState(true)
    const [filter, setFilter] = useState("")

    return (
        <div className="col-list">
            <div className="col-list-header">
                <span>{header}</span>
                <HideButton isShow={isShowBtn} setIsShow={setIsShowBtn}></HideButton>
                <FilterButton filter={filter} setFilter={setFilter}></FilterButton>
            </div>
            {isShowBtn ? 
                array.filter(e => filter === "" ? e : e.status === filter).map((s, i) => 
                    <Card key={i} title={s.title} description={s.description} status={s.status}></Card>
            ) 
            : null}
        </div>
    )
}