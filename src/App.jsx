import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, } from "./components";
import Education from "./components/Education";
import TeamWork from "./components/TeamWork";
import Footer from "./components/Footer";
const App = () =>{

  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Education/>
      <Tech />
      <TeamWork/>
      <Works />

      <div className='relative z-0'>
        <Contact />
        <Footer/>
        <StarsCanvas />
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
