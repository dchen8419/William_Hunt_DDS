import React from 'react'
import '../../procedures/cards/ProcedureCard.css'

function ProcedureCard(props) {
    return (
        <div className='procedure_card_container'>
            <div>
                <img alt={props.img} src={props.img}/>
            </div>
            <div className='procedure_card_title'>
                <h1>{props.title}</h1>
            </div>
            <div>
                <h4>{props.about}</h4>
            </div>
        </div>
    )
}

export default ProcedureCard