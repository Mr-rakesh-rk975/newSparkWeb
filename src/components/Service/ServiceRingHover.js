import React, { useState } from 'react';
import '../Service/ServiceRingHover.scss';

export default function ServiceRingHover() {
  const [activeService, setActiveService] = useState(0);

  const handleCircleHover = (index) => {
    setActiveService(index);
  };

  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-md-4 col-sm-5 col-xs-5">
                <div className="g-content">
                  <ul className='circle-container'>
                    {Array(8).fill().map((_, index) => (
                      <li key={index} data-id={index} className={activeService === index ? 'active' : ''} onMouseEnter={() => handleCircleHover(index)}>
                        <a href='/' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <img src={require(`../images/icon-${index +1}.png`)} alt='logo' style={{width: '50px', height: '50px'}} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-8 col-sm-7 col-xs-7">
                <div className="g-content">
                  <ul className="services-container">
                    {Array(8).fill().map((_, index) => (
                      <li key={index} className={activeService === index ? 'active animated fadeIn' : ''}>
                        <div className="service-item" data-id={index}>
                          <div className="header">
                            <h4>{getServiceName(index)}</h4>
                          </div>
                          <div className="body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim facilisis dolor in molestie. Praesent scelerisque ultricies dui quis tincidunt.</p>
                          </div>
                          <div className="footer">
                            <a className="btn btn-primary" href="/">Call US!</a>
                            <a className="btn btn-primary" href="/">More information</a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Function to get service name based on index
function getServiceName(index) {
  const serviceNames = ["HTML", "CSS", "JAVA SCRIPT", "NODE JS", "REACT JS", "WORDPRESS", "PHP", "FIGMA"];
  return serviceNames[index];
}
