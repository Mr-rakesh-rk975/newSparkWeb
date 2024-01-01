import React, { useState, useEffect } from 'react';
import MySong from './MySong';
import '../components/css-files/ContactUs.css';
import Select from 'react-select';
import axios from 'axios';
import LeafletMapComponent from './Map/LeafletMapComponent';



function ContactUs({ img, theme, toggleMode }) {
  
  const location = { lat: 31.07473, lng: 77.1831 }; // Replace with your desired coordinates


  const [countryOptions, setCountryOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {

    const fetchCountries = async () => {

      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;

        const options = data.map((country) => ({
          value: country.name.common,
          label: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>{country.flags  && <img src={country.flags.svg} alt={country.name.common} width={20} height={15} />}</span>
              <span style={{ marginLeft: '5px' }} >{country.name.common}</span>
            </div>
          ),
        }));

        setCountryOptions(options);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);


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
    contactNumber: '',
    message: '',
    hasSent: false,

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear the form fields
    setFormData(prevState => ({
      ...prevState,
      name: '',
      email: '',
      contactNumber: '',
      message: '',
      hasSent: true,
    }));




    setTimeout(() => {
      setFormData(prevState => ({ ...prevState, hasSent: false }));
    }, 2000);
  };

  const { name, email, contactNumber, message, hasSent } = formData;

  const borderBottom = ({ borderBottom: theme === 'light' ? '2px solid rgb(242, 75, 116) ' : "2px solid rgb(30, 124, 192)" })

  return (
    <>
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
            <form className="contact-form-container" onSubmit={handleSubmit} autoComplete='off'>
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
                <span className="telephone-section">
                  <Select
                    value={countryOptions.find((option) => option.value === selectedCountry)}
                    onChange={(selectedOption) => setSelectedCountry(selectedOption.value)}
                    options={countryOptions}
                    className="country-dropdown"
                    isSearchable
                    placeholder="Select Country"
                    inputProps={{ autoComplete: 'off' }} 
                    aria-label='none'
                  />
                
                  <input
                    style={borderBottom}
                    type="number"
                    value={contactNumber}
                    placeholder="Telephone Number"
                    className="contact-input"
                    name="contactNumber"
                    onChange={handleChange}
                    autoComplete="nope"
                    required
                  />
                </span>
                <textarea
                  style={borderBottom}
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  className="contact-input"
                  onChange={handleChange}

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
      <div style={{ height: '400px', width: '100%', overflow: 'hidden' }}>
        <LeafletMapComponent lat={location.lat} lng={location.lng} />
      </div>
    </>
  );
}

export default ContactUs;