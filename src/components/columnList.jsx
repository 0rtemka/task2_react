import { useState } from 'react'
import { Card } from './card'
import { HideButton } from './hideButton'

export const ColumnList = ({header, array}) => {

    const [isShowBtn, setIsShowBtn] = useState(true)

    const onButtonClick = () => {
        setIsShowBtn(!isShowBtn)
    }

    return (
        <div className="col-list">
            <div className="col-list-header">
                <span>{header}</span>
                <HideButton isShow={isShowBtn} onClick={onButtonClick}></HideButton>
            </div>
            {isShowBtn ? 
                array.map((s, i) => 
                    <Card key={i} title={s.title} description={s.description}></Card>
            ) 
            : null}
        </div>
    )
}