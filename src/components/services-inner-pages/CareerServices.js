import React, { useState } from 'react';
import '../css-files/CareerServices.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarker, faFileAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import MySong from '../MySong';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LiveCodeEditor from '../codeEditor/LiveCodeEditor';


const CareerServices = ({ img, theme, toggleMode }) => {

  const [loading, setLoading] = useState(false); // Added state for loader



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    applicationType: '',
    selectedField: '',
    experience: '',
    resume: '',
    certificate: '',
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
 setLoading(true);
    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('phone', formData.phone);
    form.append('applicationType', formData.applicationType);
    form.append('selectedField', formData.selectedField);
    form.append('resume', formData.resume);

    if (formData.applicationType === 'internship') {
      form.delete('experience');
      form.delete('certificate');
    }

    if (formData.applicationType === 'job') {
      form.append('experience', formData.experience);
      form.append('certificate', formData.certificate);
    }

    const data = await fetch('http://localhost:9200/career', {
      method: 'POST',
      credentials: 'same-origin',
      body: form,
    });

    try {
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const result = await data.json();
      console.log(`Data was sent successfully: ${JSON.stringify(result)}`);
    } catch (error) {
      console.error('Error:', error);
    }

//     // Clear file input values
    // document.getElementById('name','email','phone','applicationType','selectedField','experience').value = '';
   
    setTimeout(() => {
      setLoading(false); 
      const resumeInput = document.getElementById('resume');
      const certificateInput = document.getElementById('certificate');
    
      if (resumeInput) {
        resumeInput.value = '';
      }
    
      if (certificateInput) {
        certificateInput.value = '';
      }
      
  
      // Reset other form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        applicationType: '',
        selectedField: '',
        experience: '',
        resume: '',
        certificate: '',
      });
      toast.success(
        <div className="register-success-toast">
          Apllication Submitted Successfully
        </div>
        )
    }, 4000);
  };





  return (
    <>
          <ToastContainer />
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
                  placeholder='enter you name'
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
                  placeholder='example@gmail.com'
                />
              </div>
              <div className="form-group">
                <label htmlFor="applicationType">Contact Number:</label>
                <input

                  type="number"
                  id='phone'
                  value={formData.phone}
                  placeholder="Contact Number"
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
              <button type="submit">
              {loading ? (
                <>
                  <ClipLoader color="#ffffff" loading size={20} />
                  &nbsp; Loading...
                </>
              ) : (
                'Apply Now'
              )}
              </button>
            </form>
          </div>
          
          
        </div>
        <div className="code-pannel-outer">
          <LiveCodeEditor/>
          </div>

          
      </div>
    </>
  );
};

export default CareerServices;
