import { Card } from './card'

export const ColumnList = ({header, array}) => {
    return (
        <div className="col-list">
            <span className="col-list-header">{header}</span>
            {array.map((s, i) => 
                <Card key={i} title={s.title} description={s.description}></Card>
            )}
        </div>
    )
}