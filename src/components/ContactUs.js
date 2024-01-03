import React, { useState, lazy, Suspense } from 'react';
import MySong from './MySong';
import '../components/css-files/ContactUs.css';

const LeafletMapComponent = lazy(() => import('./Map/LeafletMapComponent'));




function ContactUs({ img, theme, toggleMode }) {
  
 




  const SentMessageBox = () => {
    return (
      <div className="sent-message-box">
        Message Sent! <i className="fas fa-check-circle msg-sent"></i>
      </div>
    );
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    hasSent: false,

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    try {

      const data = await fetch('http://localhost:9300/user', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })
      

      const result = await data.json();
      console.log(`Data was sent successfully:--- ${JSON.stringify(result)}`)
    } catch (error) {
      console.error('data was not sent!')
    }
    
    // Clear the form fields
    setFormData(prevState => ({
      ...prevState,
      name: '',
      email: '',
      phone: '',
      message: '',
      hasSent: true,
    }));
    setTimeout(() => {
      setFormData(prevState => ({ ...prevState, hasSent: false }));
    }, 2000);
  };

  const { name, email, phone, message, hasSent } = formData;

  const borderBottom = ({ borderBottom: theme === 'light' ? '2px solid rgb(242, 75, 116) ' : "2px solid rgb(30, 124, 192)" })

  return (
    <>
    <div className="contact-outer">
      <div className='btn-outer'>
        <div className='btn-inner'>
          <div className='both-botton'>
            <img src={img} alt='sun&moon' onClick={toggleMode} />
            <MySong theme={theme} />


          </div>
        </div>
      </div>

      <div className="contactUs-page-outer">
        <div className="contactUs-page-inner">

          <h1 style={{ color: theme === 'light' ? 'rgb(242, 75, 116) ' : "rgb(30, 124, 192)" }}>Contact Us</h1>


          {hasSent ? (
            <SentMessageBox />
          ) : (
            <form className="contact-form-container" onSubmit={handleSubmit}>
              <span className='form-input-wrapper'>
                <input
                  style={borderBottom}
                  type="text"
                  value={name}
                  placeholder="Full Name"
                  name="name"
                  className="contact-input"
                  onChange={handleChange}
                  required
                />
                <input
                  style={borderBottom}
                  type="email"
                  value={email}
                  placeholder="example@gmail.com"
                  name="email"
                  className="contact-input"
                  onChange={handleChange}
                  required
                />
              
                  <input
                    style={borderBottom}
                    type="number"
                    value={phone}
                    placeholder="Telephone Number"
                    className="contact-input"
                    name="phone"
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />
                <textarea
                  style={borderBottom}
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  className="contact-input"
                  onChange={handleChange}
                  autoComplete="txt"
                  required
                />
              </span>
              <button style={{ color: theme === 'light' ? '#fff' : '#000', background: theme === 'light' ? 'rgb(242, 75, 116) ' : "rgb(30, 124, 192)" }} className="button submit-button" value="Submit">
                Send!
              </button>
            </form>
          )}
        </div>
        
      </div>
      <div style={{ height: '400px', width: '100%', overflow: 'hidden',zIndex: '-1'}}>
      <Suspense fallback={<div>Loading map...</div>}>
        <LeafletMapComponent theme={theme} />
      </Suspense>
      </div>
      </div>
    </>
  );
}

export default ContactUs;