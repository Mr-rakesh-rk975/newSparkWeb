import React from 'react';
import '../Service/ServiceFeatures.css';

const ServiceFeatures = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInDown">Awesome Features</h2>
          <div className="shape wow fadeInDown"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="content-left">
              <div className="box-item animated wow fadeInLeft">
                <span className="icon">
                  <i className="fas fa-rocket"></i>
                </span>
                <div className="text">
                  <h4>Bootstrap 4 Based</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="box-item animated wow fadeInLeft" data-wow-delay="0.6s">
                <span className="icon">
                  <i className="fas fa-tablet-alt"></i>
                </span>
                <div className="text">
                  <h4>Fully Responsive</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="box-item animated wow fadeInLeft" data-wow-delay="0.9s">
                <span className="icon">
                  <i className="fas fa-cog"></i>
                </span>
                <div className="text">
                  <h4>HTML5, CSS3 & SASS</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="show-box animated wow fadeInUp">
              <img src="https://i.ibb.co/KjkFh55/phone-img.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="content-right">
              <div className="box-item animated wow fadeInRight">
                <span className="icon">
                  <i className="fas fa-pen-nib"></i>
                </span>
                <div className="text">
                  <h4>Modern Design</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="box-item animated wow fadeInRight" data-wow-delay="0.6s">
                <span className="icon">
                  <i className="fas fa-layer-group"></i>
                </span>
                <div className="text">
                  <h4>Multi-purpose Template</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="box-item animated wow fadeInRight" data-wow-delay="0.9s">
                <span className="icon">
                  <i className="fas fa-feather-alt"></i>
                </span>
                <div className="text">
                  <h4>Working Contact Form</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
