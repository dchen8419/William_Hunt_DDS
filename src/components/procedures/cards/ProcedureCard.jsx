import React from 'react'
import '../../procedures/cards/ProcedureCard.css'

function ProcedureCard(props) {
    return (
        <div className='procedure_card_container'>
            <div className='procedure_card_image_container'>
                <img alt="" aria-hidden="true" src={props.img} className='procedure_card_image'/>
            </div>
            <div className='procedure_card_title'>
                <h3>{props.title}</h3>
            </div>
            <div className='procedure_card_about'>
                <p>{props.about}</p>
            </div>
        </div>
    )
}

export default ProcedureCard
