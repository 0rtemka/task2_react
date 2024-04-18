import { useState } from 'react'
import '../App.css'

export const Helper = ({text}) => {

    const [style, setStyle] = useState('')

    return (
        <div className="helper" style={{display: style}} onClick={() => { setStyle('none')}}>
            {text}
        </div>
    )
}