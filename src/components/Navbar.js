
import { useState } from "react";
import { NavLink, Link } from "react-router-dom"







export default function Navbar({ theme }) {

  const [componentVisible, setComponentVisible] = useState(false);





  const handleLinkClick = () => {
    setComponentVisible(true);
    const closeButton = document.getElementById("uset-background");
    if (closeButton) {
      closeButton.click();
    }
  };
  console.log(componentVisible)










  return (

    <>



      <nav className={`navbar`} id='navbar-outer' style={{
        borderBottom: theme === 'dark' ? "1px solid #1E7CC0" : "1px solid #F24B74",
        backgroundColor: theme === 'dark' ? "#0c073ef7" : "#fffffff7"
      }} >

        <div className="container-fluid" id='navbar-container-section'>
          <div className='nav-phone-number'>
            <a href="tel:999999999" style={{ color: theme === 'dark' ? "#fff" : "#F24B74" }}>999999999</a>

          </div>
          <div className='nav-logo'>
            <Link to="/"><img src='my-images/sitelogofirst.png' alt="img" style={{ filter: theme === 'dark' ? "invert(1)" : "invert(0)" }} /></Link>

          </div>
          <div className='text-menu'>
            <p style={{ color: theme === 'light' ? '#f24b74' : '#1e7cc0' }}>menu</p>
            <div className="collapse collapse-my-togglebutton" id="navbarToggleExternalContent" data-bs-theme="dark">
              <div className="p-4" style={{ backgroundColor: theme === 'light' ? 'rgb(255 255 255 / 97%)' : 'rgba(12, 7, 62, 0.97)' }}>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" id='navbar-toggle-ul'>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link`}
                      aria-current="page"
                      to="/"
                      onClick={handleLinkClick}
                      style={({ isActive }) => {
                        return {
                          color: isActive
                            ? theme === 'light'
                              ? '#f24b74'
                              : '#fff'
                            : '',
                        };
                      }}


                    >
                      Home


                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={`nav-link`}
                      aria-current="page"
                      to="/about-us"
                      onClick={handleLinkClick}
                      style={({ isActive }) => {
                        return {
                          color: isActive
                            ? theme === 'light'
                              ? '#f24b74'
                              : '#fff'
                            : '',
                        };
                      }}
                    >
                      about us
                    </NavLink>
                  </li>
                  <li className="nav-item">


                    <NavLink
                      className={`nav-link`}
                      aria-current="page"
                      to="/contact-us"

                      onClick={handleLinkClick}
                      style={({ isActive }) => {
                        return {
                          color: isActive
                            ? theme === 'light'
                              ? '#f24b74'
                              : '#fff'
                            : '',
                        };
                      }}
                    >
                      contact us
                    </NavLink>
                  </li>
                  <li className="nav-item">

                    <NavLink
                      className={`nav-link`}
                      aria-current="page"
                      to="/our-services"

                      onClick={handleLinkClick}
                      style={({ isActive }) => {
                        return {
                          color: isActive
                            ? theme === 'light'
                              ? '#f24b74'
                              : '#fff'
                            : '',
                        };
                      }}
                    >

                      our services

                    </NavLink>

                  </li>
                  <li className="nav-item">


                    <NavLink
                      className={`nav-link`}
                      aria-current="page" // CareerServices
                      to="/career-services"

                      onClick={handleLinkClick}
                      style={({ isActive }) => {
                        return {
                          color: isActive
                            ? theme === 'light'
                              ? '#f24b74'
                              : '#fff'
                            : '',
                        };
                      }}
                    >
                      Career Services
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <nav className="navbar ">
              <div className="container-fluid">
                <button className="navbar-toggler" id='uset-background' type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <div className='menu-buttton'>
                    <div className='button-top-toggle btn-toggle-first' style={{ background: theme === 'light' ? '#f24b74' : '#1E7CC0' }}></div>
                    <div className='button-top-toggle btn-toggle-second' style={{ background: theme === 'light' ? '#f24b74' : '#1E7CC0' }}></div>
                    <div className='button-top-toggle btn-toggle-third' style={{ background: theme === 'light' ? '#f24b74' : '#1E7CC0' }}></div>
                  </div>
                </button>
              </div>
            </nav>
          </div>





        </div>
      </nav>







    </>
  )
}
