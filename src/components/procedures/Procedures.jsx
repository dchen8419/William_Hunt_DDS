import React from 'react';
import ProcedureCard from './cards/ProcedureCard';
import Crowns from '../../assets/crown.png'
import Bridges from '../../assets/bridges.png';
import Veneers from '../../assets/veneers.png';
import Dentures from '../../assets/dentures.png'
import Extraction from '../../assets/extraction.png';
import Partials from '../../assets/partials.png';
import Restorations from '../../assets/restoration.png';
import Bleaching from '../../assets/bleaching.png';
import Endodontics from '../../assets/root_canal.png';
import '../../components/procedures/Procedures.css';



function Procedures() {
    return (
        <div id="Services" className='procedure_background'>
            <h1 className='procedure_dental_service'>Dental Services</h1>
            <ul className='procedure_ul_list'>
                <div className='procedure_container'>
                    <div className='procedure_container-item procedure_container_crowns_bridges'>
                        <ProcedureCard
                            img={Crowns} title='Crowns' about='We create impressions for perfect crowns'
                        />
                    </div>
                    <div className='procedure_container-item procedure_container_restorations'>
                        <ProcedureCard 
                            img={Veneers} title='Veneers' about='Let us help you improve your smile!'
                        />
                    </div>
                    <div className='procedure_container-item procedure_container_extractions'>
                        <ProcedureCard 
                            img={Bridges} title='Bridges' about='Using state-of-the-art tools to optimize area for comfortable bridges'
                        />
                    </div>
                </div>
            </ul>
            <ul className='procedure_ul_list'>
                <div className='procedure_container'>
                    <div className='procedure_container-item procedure_container_dentures'>
                        <ProcedureCard 
                            img={Restorations} title='Composite Restorations' about='We can repair and improve your oral health'
                        />
                    </div>
                    <div className='procedure_container-item procedure_container_partials'>
                        <ProcedureCard 
                            img={Dentures} title='Dentures' about='Let us help you fit new dentures'
                        />
                    </div>
                    <div className='procedure_container-item procedure_container_endodontic'>
                        <ProcedureCard 
                            img={Bleaching} title='Bleaching' about='Let us whiten your smile!'
                        />
                    </div>
                </div>
            </ul>
            <ul className='procedure_ul_list'>
                <div className='procedure_container'>
                    <div className='procedure_container-item procedure_container_dentures'>
                        <ProcedureCard 
                            img={Endodontics} title='Endodontics' about='We create treatments for your oral health'
                        />
                    </div>
                    <div className='procedure_container-item procedure_container_partials'>
                        <ProcedureCard 
                            img={Extraction} title='Extractions' about='Conservative approach with all tooth extractions'
                        />
                    </div>
                    <div className='procedure_container-item procedure_container_partials'>
                        <ProcedureCard 
                            img={Partials} title='Partials' about='Creating state-of-the-art partials'
                        />
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Procedures