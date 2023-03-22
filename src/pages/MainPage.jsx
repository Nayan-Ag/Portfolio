import React from 'react';
import '../App.css';
import Sidebar from '../components/Sidebar';
import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

const MainPage = () => {
  return (
    <div className='Main'>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="content">
        <Home/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  )
}

export default MainPage
