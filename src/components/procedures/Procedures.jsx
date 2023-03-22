import React from 'react'
import ProcedureCard from './cards/ProcedureCard'
import Crown_Bridges from '../../assets/crowns_bridges.png'
import Restoration from '../../assets/restoration.png'
import Extraction from '../../assets/extraction.png'
import '../../components/procedures/Procedures.css'



function Procedures() {
    return (
        <div id="About"className='procedure_background'>
            <ul className='procedure_ul_list'>
                <div className='procedure_container'>
                    <div className='procedure_container-item procedure_container_crowns_bridges'>
                        <ProcedureCard
                            img={Crown_Bridges} title='Crowns and Bridges' about='We can create impressions and create optimal edges of area for perfect crowns and bridges'
                        />
                    </div>
                    <div className='procedure_container-item procedure_container_restorations'>
                        <ProcedureCard 
                            img={Restoration} title='Restoration' about='Let us help you restore your smile for a more confident you!'
                        />
                    </div>
                    <div className='procedure_container-item procedure_container_extractions'>
                        <ProcedureCard 
                            img={Extraction} title='Extractions' about='Comfort and Confidence are just as important as your teeth'
                        />
                    </div>
                </div>
            </ul>
            <ul className='procedure_ul_list'>
                <div className='procedure_container'>
                    <div className='procedure_container-item procedure_container_dentures'>
                        <ProcedureCard 
                            title='Dentures' about='Let us help you fit new dentures'
                        />
                    </div>
                    <div className='procedure_container-item procedure_container_partials'>
                        <ProcedureCard 
                            title='Partials' about='Creating state-of-the-art partials'
                        />
                    </div>
                    <div className='procedure_container-item procedure_container_endodontic'>
                        <ProcedureCard 
                            title='Endodotics' about='We can do root canals'
                        />
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Procedures