
import React from 'react';
import './components/style.css'
 import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import OurServices from './components/OurServices';
import AboutUs from './components/AboutUs';
import CareerServices from './components/services-inner-pages/CareerServices';

 
 import sun from './components/images/sun.png'
import moon from './components/images/moon.png'
 import { useState } from 'react';
 
  
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

 
 
    
  
 


  
   
  
  
    
 
 
 
 
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Model } from './components/Newdance';


 
 
 
 
 
function App() {
   


    
 
   const [theme, setTheme] = useState('light')
   const [img, setImg] = useState(sun)
   

   const toggleMode = () => {
      if (theme === 'light') {
         setTheme('dark');
         document.body.style.background='rgba(12, 7, 62, 0.97)' 
         
         setImg(moon)  
      }
      else {
         setTheme('light');
         setImg(sun)
         document.body.style.background='#fff'
        
      }

   }
    
    
   

   return (
 
      <>

      <div className='app'>
      

   
 
          <BrowserRouter>
          <Navbar theme={theme}/>
         <Routes>
         <Route path='/' element={<Home toggleMode={toggleMode} img={img} theme={theme}/>}/>
         <Route path='/about-us' element={<AboutUs toggleMode={toggleMode} img={img} theme={theme}/>}/>  
         <Route path='/contact-us' element={<ContactUs toggleMode={toggleMode} img={img} theme={theme}/>}/>
         <Route path='/our-services' element={<OurServices toggleMode={toggleMode} img={img} theme={theme}/>}/>
         <Route path='*' element={<ErrorPage toggleMode={toggleMode} img={img} theme={theme}/>}/>
         <Route path='/career-services' element={<CareerServices toggleMode={toggleMode} img={img} theme={theme}/>}/>
         </Routes>
         </BrowserRouter> 
         
        <Footer theme={theme} toggleMode={toggleMode} /> 
        
        
       
         


        
     
      
        
       
      
        
 
          
        
          


         {/* --hero-section--*/}
         {/* <Canvas className="cnavas" camera={{ position: [1, 1.5, 2.5], fov: 50 }}>
         <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <OrbitControls/>
            <group position={[0, -1, 0]}>
            <Model/>
            </group>
            <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
         </Canvas> */}
      

          
         </div>

      </>
      
   );
}

export default App;
