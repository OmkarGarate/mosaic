import React from 'react'
import Lae from './Lae'
import EventListing from './EventListing'
import Gallery from './Gallery'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import HomeSlider from './HomeSlider';

function Home() {
  return (
    <div>
        <Navbar/>
        <HomeSlider/>
        <Lae/>
        <EventListing/>
        <Gallery/>
    </div>
  )
}

export default Home