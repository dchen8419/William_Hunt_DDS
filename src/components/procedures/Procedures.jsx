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
import useScrollReveal from '../../hooks/useScrollReveal'



function Procedures() {
    const headingReveal = useScrollReveal()
    const servicesReveal = useScrollReveal()
    const services = [
        { img: Crowns, title: 'Crowns', about: 'We create impressions for perfect crowns' },
        { img: Veneers, title: 'Veneers', about: 'Let us help you improve your smile!' },
        { img: Bridges, title: 'Bridges', about: 'Using state-of-the-art tools to optimize area for comfortable bridges' },
        { img: Restorations, title: 'Composite Restorations', about: 'We can repair and improve your oral health' },
        { img: Dentures, title: 'Dentures', about: 'Let us help you fit new dentures' },
        { img: Bleaching, title: 'Bleaching', about: 'Let us whiten your smile!' },
        { img: Endodontics, title: 'Endodontics', about: 'We create treatments for your oral health' },
        { img: Extraction, title: 'Extractions', about: 'Conservative approach with all tooth extractions' },
        { img: Partials, title: 'Partials', about: 'Creating state-of-the-art partials' },
    ];

    return (
        <section id="Services" className='procedure_background'>
            <div ref={headingReveal.ref} className={`services-heading scroll-reveal ${headingReveal.isVisible ? 'is-visible' : ''}`}><span className="section-kicker">Dental care in Forest City, NC</span><h2 className='procedure_dental_service'>Dental services</h2><p>Explore dental services available at William Hunt, DDS PA. Call the office with questions or to ask about scheduling.</p></div>
            <div ref={servicesReveal.ref} className={`procedure_container ${servicesReveal.isVisible ? 'is-visible' : ''}`} role='list'>
                {services.map((service, index) => (
                    <div className='procedure_container-item' key={service.title} role='listitem' style={{ '--reveal-delay': `${index * 70}ms` }}>
                        <ProcedureCard img={service.img} title={service.title} about={service.about} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Procedures
