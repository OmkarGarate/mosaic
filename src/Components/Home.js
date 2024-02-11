import React from 'react'
import Lae from './Lae'
import EventListing from './EventListing'
import Gallery from './Gallery'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import HomeSlider from './HomeSlider';
import Footer from './Footer';
import Mosaicexpertise from './Mosaicexpertise';
import About from './About';

function Home() {
  return (
    <div>
        <Navbar/>
        <HomeSlider/>
        <Lae/>
        <About/>
        <EventListing/>
        <Gallery/>
        <Mosaicexpertise/>
        <Footer/>
    </div>
  )
}

export default Home