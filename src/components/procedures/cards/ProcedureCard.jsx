import React from 'react'
import '../../procedures/cards/ProcedureCard.css'

function ProcedureCard(props) {
    return (
        <div className='procedure_card_container'>
            <div className='procedure_card_image_container'>
                <img alt={props.img} src={props.img} className='procedure_card_image'/>
            </div>
            <div className='procedure_card_title'>
                <h1>{props.title}</h1>
            </div>
            <div className='procedure_card_about'>
                <h4>{props.about}</h4>
            </div>
        </div>
    )
}

export default ProcedureCard