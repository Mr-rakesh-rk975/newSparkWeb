import React from 'react'
import ServiceCardHover from './ServiceCardHover'
import ServiceRingHover from './ServiceRingHover';
import '../Service/Service.css';
import MySong from '../MySong';
import ServiceFeatures from './ServiceFeatures';
import ServiceOffer from './ServiceOffer';

function Service({ img, theme, toggleMode }) {
    return (

        <>
         <div className='btn-outer bg-btn'>
            <div className='btn-inner'>
              <div className='both-botton'>
                <img src={img} alt='sun&moon' onClick={toggleMode} />
                <MySong theme={theme} />


              </div>
            </div>
          </div>
        <div className="services-outer">
       
            <div className="page-sections">
            <ServiceCardHover/>
            <ServiceRingHover/>
            </div>
            <ServiceFeatures/>
            <ServiceOffer/>
        </div>
        </>
    )
}

export default Service