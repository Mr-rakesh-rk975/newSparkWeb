import React, { useState } from 'react';
import '../css-files/CareerServices.css'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarker, faFileAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import MySong from '../MySong';



const CareerServices = ({ img, theme, toggleMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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


  const handleCertificateFile = (e) => {
    const certificateFile = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      certificate: certificateFile,
    }));
  };

  const handleResumeFile = (e) => {
    const resumeFile = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: resumeFile,
    }));
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('applicationType', formData.applicationType);
      form.append('selectedField', formData.selectedField);
  
      if (formData.applicationType === 'job') {
        form.append('experience', formData.experience);
        form.append('certificate', formData.certificate);
      }
  
      form.append('resume', formData.resume);
  
      const data = await fetch('http://localhost:9300/career', {
        method: 'POST',
        body: form,
      });
  
      const result = await data.json();
      console.log(`Data was sent successfully:--- ${JSON.stringify(result)}`);
    } catch (error) {
      console.error('data was not sent!');
    }
  
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      applicationType: '',
      selectedField: '',
      experience: '',
      resume: null,
      certificate: null,
    });
  };
  

  return (
    <>
    <div className="career-services-page">
    <div className="career-services-inner-wrapper">
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
                    value={formData.phone}
                    placeholder="Telephone Number"
                    name="phone"
                    onChange={handleChange}
                    autoComplete="tel"
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
              
               onChange={(e) => handleCertificateFile(e, 'certificate')}

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
            
             onChange={(e) => handleResumeFile(e, 'resume')}
              accept=".pdf, .doc, .docx"
              required
            />
          </div>
          <button type="submit">Apply Now</button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default CareerServices;
