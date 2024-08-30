import React from 'react';
import './index.css';  
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <>
     <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
       <HeroSection/>
       <FeatureSection/>
       <Workflow/>
       <Pricing/>
       <Testimonials/>
     </div>
     
    </>
  );
}

export default App;
