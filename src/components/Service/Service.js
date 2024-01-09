import React from 'react'
import ServiceCardHover from './ServiceCardHover'
import ServiceRingHover from './ServiceRingHover';
import '../Service/Service.css'

function Service() {
    return (

        <>
        <div className="services-outer">
            <div className="page-sections">
            <ServiceCardHover/>
            <ServiceRingHover/>
            </div>
        </div>
        </>
    )
}

export default Service