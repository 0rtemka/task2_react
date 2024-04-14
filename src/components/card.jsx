import '../App.css'

export const Card = ({title, description}) => {
    return (
        <div className="card">
            <span className='card-title'>{title}</span>
            <div className='delimeter'></div>
            <span className='card-desc'>{description}</span>
        </div>
    )
}