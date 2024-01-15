  import MySong from './MySong';
import ContactForm from './ContactForm';
import Marquee from 'react-fast-marquee';
import BGVideo from '../components/videos/dsk.ccf9a451.mp4'
  function Home({toggleMode,img,theme}) {

 

  return (
     <>


{/* hero section starts*/}
 
           
       
     <div className={`btn-outer`}>
          <div className='btn-inner'>
            <div className='both-botton'>
              <img src={img} alt='sun&moon' onClick={toggleMode} />
              <MySong theme={theme}/>
            </div>
          </div>
        </div>
         
            <div className={`hero-section-outer`}>
            <video className="video-background" autoPlay loop muted playsInline>
        <source src={BGVideo} type="video/mp4" />
              <div className='hero-section-inner'>
                <div className="hero-section-first-div">
                  <p style={{color:theme==='light'?'#000':'#fff'}}>hii user</p>
                </div>
                <div className='hero-section-heading'>
                  <h1 style={{color:theme==='light'?'#000':'#fff'}}>
                    <span id='welcome-span-text'>welcome</span> to<br />sparkweb<br />solutions
                  </h1>
                </div>
              </div>
              </video>
            </div>

           
            
            {/* hero section ends*/}




 
 {/* about us section starts*/}
            <div className='about-outer'>
                <div className='about-inner'>
                    <div className='about-flex'>
                        <div className='about-left-section'>
                            <h1 style={{color:theme==='light'?'#000':'rgb(30, 124, 192)'}}>about us</h1>
                            <p style={{color:theme==='light'?'#000':'#fff'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                             used to demonstrate the visual form of a document or a typeface without relying
                              on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                            
                            <p style={{color:theme==='light'?'#000':'#fff'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly 
                             used to demonstrate the visual form of a document or a typeface without relying 
                             on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p> 
                             <ContactForm theme={theme}/> 
                             
                                                </div>
                        <div className='about-right-section'>
                            <div className="about-first-img">
                                <img src='my-images/frame-second.png' alt="img"/>
                            </div>
                            <div className="about-second-img">
                                <img src='my-images/frame-first.png' alt="img"/>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div> 

             {/* about us section ends*/}



{/* our services section starts*/}
             <div className='services-outer'>
                <div className='services-inner'>
                    <div className='services-conatiner-areas'>

                        {/* --services section heading first starts--*/}
                        <div className="heading-right">
                            <Marquee play pauseOnHover speed={20} >
                                 <h1 style={{color:theme==='light'?'#000':'rgb(30, 124, 192)'}}>our services  our services  </h1>
                                 </Marquee>
                         </div>
                        {/* --services section heading first ends--*/}


                        {/* --services section heading second starts--*/}
                        <div className="heading-left">
                        <Marquee play pauseOnHover    direction='right' speed={60} gradientWidth={10}>
                                 <h1 style={{color:theme==='light'?'#000':'#fff'}}>our services  our services  </h1>
                                 </Marquee>
                         </div>
                        {/* --services section heading second ends--*/}


                        <div className='services-conatiner-outer'>
                            <div className="services-conatiner-inner" id='service-inner-contain'>
                                {/*services section first starts*/}

                                <div className='filp-card-first flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: theme === 'light' ? '#fff' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-first.png'  alt=""/>
                                            </div>
                                            <div className='flip-heading'>
                                                
                                                <h1 style={{color:theme==='light'?'#000':'#fff'}}>Web programming</h1>
                                            </div>
                                        </div>
                                        <div className='flip-card-content'>
                                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section first ends*/}

                                {/*services section second starts*/}

                                <div className='filp-card-second flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: theme === 'light' ? '#fff' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-second.png' alt=''/>
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: theme === 'light' ? '#f24b74' : '#fff' }}>graphic-design</h1>
                                            </div>
                                        </div>


                                        <div className='flip-card-content' style={{ background: theme === 'light' ? '#f24b7400' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: theme === 'light' ? '#000' : '#fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section second ends*/}

                                {/*services section third starts*/}

                                <div className='filp-card-third flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: theme === 'light' ? '#fff' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-third.png' alt=''/>
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: theme === 'light' ? '#f24b74' : '#fff' }}>Ui/ux-design</h1>
                                            </div>
                                        </div>


                                        <div className='flip-card-content' style={{ background: theme === 'light' ? '#f24b7400' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: theme === 'light' ? '#000' : '#fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section third ends*/}

                                {/*services section fourth starts*/}

                                <div className='filp-card-fourth flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: theme === 'light' ? '#fff' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-fourth.png' alt=''/>
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: theme === 'light' ? '#f24b74' : '#fff' }}>wordpress</h1>
                                            </div>
                                        </div>


                                        <div className='flip-card-content' style={{ background: theme === 'light' ? '#f24b7400' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: theme === 'light' ? '#000' : ' #fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section fourth ends*/}

                                {/*services section fifth starts*/}

                                <div className='filp-card-fifth flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: theme === 'light' ? '#fff' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-fifth.png' alt=''/>
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: theme === 'light' ? '#f24b74' : '#fff' }}>react js</h1>
                                            </div>
                                        </div>

                                        <div className='flip-card-content' style={{ background: theme === 'light' ? '#f24b7400' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: theme === 'light' ? '#000' : '#fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section fifth ends*/}

                                {/*services section sixth starts*/}

                                <div className='filp-card-sixth flip-card'>
                                    <div className='flip-card-inner'>
                                        <div className='flip-card-image' style={{ background: theme === 'light' ? '#fff' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <div className="flip-image">
                                                <img src='my-images/services-img-first.png'  alt=""/>
                                            </div>
                                            <div className='flip-heading'>
                                                <h1 style={{ color: theme === 'light' ? '#f24b74' : '#fff' }}>react js</h1>
                                            </div>
                                        </div>

                                        <div className='flip-card-content' style={{ background: theme === 'light' ? '#f24b7400' : '#ffffff05', border: theme === 'light' ? '1px solid #f24b74' : '1px solid #1e7cc040' }}>
                                            <p style={{ color: theme === 'light' ? '#000' : '#fff' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        </div>

                                    </div>
                                </div>

                                {/*services section sixth ends*/}


                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* our services section ends*/}










 {/* what we have done section starts*/}

            <div className="what-we-have-done">
                <div className="services-inner">

                    {/* --services section heading first starts--*/}
                    <div className="heading-right">
                    <Marquee play pauseOnHover speed={20} >
                             <h1 style={{ color: theme === 'light' ? '#f24b74' : '#1E7CC0' }}>what we have done</h1>
                             </Marquee>
                     </div>
                    {/* --services section heading first ends--*/}


                    {/* --services section heading second starts--*/}
                    <div className="heading-left">
                    <Marquee play pauseOnHover    direction='right' speed={60} gradientWidth={10}>
                             <h1 style={{ color: theme === 'light' ? '#202021' : '#fff' }}>what we have done</h1>
                             </Marquee>
                     </div>
                    {/* --services section heading second ends--*/}

                    <div className='services-conatiner-outer'>
                        <div className="services-conatiner-inner">
                            {/* --services section first--*/}
                            <div className='services-first services-section' style={{ background: theme === 'light' ? '#f24b74' : '#1E7CC0' }}>
                                <div className="site-name service-info">
                                    <a href="/">hopingminds.com</a>
                                </div>
                                <div className="site-admin-name service-info">
                                    <h2>mr chinedu</h2>
                                </div>
                                <div className="site-publish service-info">
                                    <p>sep 2021</p>
                                </div>
                            </div>
                            {/* --services section first ends--*/}


                            {/* --services section second starts--*/}
                            <div className='services-second services-section' style={{ background: theme === 'light' ? '#f24b74' : '#1E7CC0' }}>
                                <div className="site-name service-info">
                                    <a href="/">hopingminds.com</a>
                                </div>
                                <div className="site-admin-name service-info">
                                    <h2>mr chinedu</h2>
                                </div>
                                <div className="site-publish service-info">
                                    <p>sep 2021</p>
                                </div>
                            </div>
                            {/* --services section second ends--*/}


                            {/* --services section third starts--*/}
                            <div className='services-second services-section' style={{ background: theme === 'light' ? '#f24b74' : '#1E7CC0' }}>
                                <div className="site-name service-info">
                                    <a href="/">hopingminds.com</a>
                                </div>
                                <div className="site-admin-name service-info">
                                    <h2>mr chinedu</h2>
                                </div>
                                <div className="site-publish service-info">
                                    <p>sep 2021</p>
                                </div>
                            </div>
                            {/* --services section third ends--*/}


                            {/* --services section fourth starts--*/}
                            <div className='services-second services-section' style={{ background: theme === 'light' ? '#f24b74' : '#1E7CC0' }}>
                                <div className="site-name service-info">
                                    <a href="/">hopingminds.com</a>
                                </div>
                                <div className="site-admin-name service-info">
                                    <h2>mr chinedu</h2>
                                </div>
                                <div className="site-publish service-info">
                                    <p>sep 2021</p>
                                </div>
                            </div>
                            {/* --services section fourth ends--*/}
                        </div>
                    </div>
                </div>
            </div>

           {/* what we have done section ends*/}







{/* testimonials section starts*/}
            <div className="testimonial-outer">
            <div className="testimonial-inner">

                {/* --testimolials heading first starts--*/}
                <div className="heading-right">
                <Marquee play pauseOnHover speed={20} >
                         <h1 style={{ color: theme === 'light' ? '#f24b74' : '#1E7CC0' }}>testimonials testimonials</h1>
                         </Marquee>
                 </div>
                {/* --testimolials heading first ends--*/}


                {/* --testimolials heading second starts--*/}
                <div className="heading-left">
                <Marquee play pauseOnHover    direction='right' speed={60} gradientWidth={10}>
                         <h1 style={{ color: theme === 'light' ? '#202021' : '#fff' }}>testimonials testimonials</h1>
                         </Marquee>
                 </div>
                {/* --testimolials heading second ends--*/}


                <div className="tetimonial-full-section">
                    <div className='testimonial-container'>

                        {/* --testimonial first starts-- */}
                        <div className="testimonial-first  testimonila-section">
                            <div className="testimonial-img-text">
                                <div className="test-img">
                                    <img src="my-images/testimonials-first.png" alt="img"/>
                                </div>
                                <div className="test-text">
                                    <div className="testi-para" style={{color:theme==='light'?"#202021":"#fff"}}>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                    </div>
                                    <div className="testi-starts">
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img" />
                                        </div>
                                        <div className="starts">
                                        <img src="my-images/star-rating.png" alt="img" />
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className='second-testi-text'>
                                <div className='left-testi-text testi-text'>
                                    <h2 style={{color:theme==='light'?"#F24B74":"#1E7CC0"}}>mr cinedu</h2>
                                </div>
                                <div className='left-testi-text testi-text'>
                                    <a href='/' style={{color:theme==='light'?"#202021":"#fff"}}>hopingminds.com</a>
                                </div>
                            </div>
                        </div>
                        {/* --testimonial first ends-- */}


                        {/* --testimonial second starts-- */}
                        <div className="testimonial-second  testimonila-section">
                            <div className="testimonial-img-text">
                                <div className="test-img">
                                    <img src="my-images/testimonials-second.png" alt="img"/>
                                </div>
                                <div className="test-text">
                                    <div className='testi-para' style={{color:theme==='light'?"#202021":"#fff"}}>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                    </div>
                                    <div className="testi-starts">
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                        <div className="starts">
                                            <img src="my-images/star-rating.png" alt="img"/>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className='second-testi-text'>
                                <div className='left-testi-text testi-text'>
                                    <h2 style={{color:theme==='light'?"#F24B74":"#1E7CC0"}}>mr cinedu</h2>
                                </div>
                                <div className='left-testi-text testi-text'>
                                    <a href='/' style={{color:theme==='light'?"#202021":"#fff"}}>hopingminds.com</a>
                                </div>
                            </div>
                        </div>
                        {/* --testimonial second ends-- */}


                        {/* --testimonial third stsrts-- */}
                        <div className="testimonial-third testimonila-section">
                            <div className="testimonial-img-text">
                                <div className="test-img">
                                    <img src="my-images/testimonials-third.png" alt="img"/>
                                </div>
                                <div className="test-text">
                                    <div className='testi-para' style={{color:theme==='light'?"#202021":"#fff"}}>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                                        <div className="testi-starts">
                                            <div className="starts">
                                                <img src="my-images/star-rating.png" alt="img"/>
                                            </div>
                                            <div className="starts">
                                                <img src="my-images/star-rating.png"alt="img" />
                                            </div>
                                            <div className="starts">
                                                <img src="my-images/star-rating.png" alt="img"/>
                                            </div>
                                            <div className="starts">
                                                <img src="my-images/star-rating.png" alt="img"/>
                                            </div>
                                            <div className="starts">
                                                <img src="my-images/star-rating.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className='second-testi-text'>
                                <div className='left-testi-text testi-text'>
                                    <h2 style={{color:theme==='light'?"#F24B74":"#1E7CC0"}}>mr cinedu</h2>
                                </div>
                                <div className='left-testi-text testi-text'>
                                    <a href='/' style={{color:theme==='light'?"#202021":"#fff"}}>hopingminds.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --testimonial third starts-- */}


            </div>
        </div>


        {/* testimonials section ends*/}

        


     </>
  )
}

export default Home