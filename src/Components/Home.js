import React from 'react'
import Lae from './Lae'
import EventListing from './EventListing'
import Gallery from './Gallery'
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Lae/>
        <EventListing/>
        <Gallery/>
    </div>
  )
}

export default Home