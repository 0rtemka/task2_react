export const UlCard = ({array}) => {
    return (
        <div className="ul-card">
            <ul className="ul-key">
                {array.map((k, i) => 
                    <li key={i} className="li-key">{k}</li>
                )}
            </ul>
        </div>
    )
}