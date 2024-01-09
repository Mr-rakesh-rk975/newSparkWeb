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
                            <p>{getServiceInfo(index)}</p>
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
function getServiceInfo(index) {
  const servicesInfo = ["HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way.","CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.","JavaScript is a scripting or a programming language, allowing developers to perform complex features on web pages. Initially, this language was created for making web pages alive. In JavaScript, the programs are called scripts. One can write them in the HTML of a web page, then it will automatically run once the page loads.","Node.js is an open-source, cross-platform, back end, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting -running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.","ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application.","WordPress (also known as WP or WordPress.org) is a web content management system. It was originally created as a tool to publish blogs but has evolved to support publishing other web content, including more traditional websites, mailing lists and Internet forum, media galleries, membership sites, learning management systems and online stores.","PHP is the language of WordPress. WordPress is a PHP-based software package. PHP is WordPress’s skeleton and muscles—without it, there’s simply no such thing as WordPress. Like any language, PHP has a core “grammar”: how the language is set up."," Figma is a digital design and prototyping tool. It is a UI and UX design application that you can use it to create websites, apps, or smaller user interface components that can be integrated into other projects. Here’s how Figma describes itself: Figma helps teams create, test, and ship better designs from start to finish."];
  return servicesInfo[index];
}