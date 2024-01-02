import React, { useState } from 'react';
import '../css-files/CareerServices.css'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarker, faFileAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import MySong from '../MySong';


const CareerServices = ({ img, theme, toggleMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: Number,
    applicationType: '',
    selectedField: '',
    experience: '',
    resume: null,
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      applicationType: '',
      selectedField: '',
      experience: '',
      resume: '',
      certificate: '',
    });
  };

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
        <h1 style={{ color: theme === 'light' ? 'rgb(242, 75, 116) ' : "rgb(30, 124, 192)" }}>Career Services</h1>


      <div className="career-services-container">
        <p>Apply for internships or jobs in your preferred field.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="applicationType">Contact Number:</label>
          <input
                    
                    type="number"
                    value={formData.contactNumber}
                    placeholder="Telephone Number"
                    name="contactNumber"
                    onChange={handleChange}
                    autoComplete="nope"
                    required
                  />
                  </div>
          <div className="form-group">
            <label htmlFor="applicationType">Application Type:</label>
            <select
              id="applicationType"
              name="applicationType"
              value={formData.applicationType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Application Type
              </option>
              <option value="internship">Applying for Internship</option>
              <option value="job">Applying for Job</option>
            </select>
          </div>
          {formData.applicationType && (
            <div className="form-group">
              <label htmlFor="selectedField">Select Field:</label>
              <select
                id="selectedField"
                name="selectedField"
                value={formData.selectedField}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Field
                </option>
                <option value="web">Web Development</option>
                <option value="dataScience">Data Science</option>
                <option value="backend">Backend Development</option>
                <option value="uiDesigning">UI Designing</option>
                {/* Add more options as needed */}
              </select>
            </div>
          )}
          {formData.applicationType === 'job' && (
            <div className="form-group">
              <label htmlFor="experience">Years of Experience:</label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="E.g., 2 years"
                required
              />
              <label htmlFor="certificate">Upload Certificate:</label>
              <input
                type="file"
                id="certificate"
                name="certificate"
                onChange={(e) => handleFileChange(e, 'certificate')}
                accept=".pdf, .doc, .docx"
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="resume">Upload Resume:</label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf, .doc, .docx"
              required
            />
          </div>
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </>
  );
};

export default CareerServices;
