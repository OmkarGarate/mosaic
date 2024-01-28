import React, { useState } from 'react';
import PrevEvents from './PrevEvents';
import { Link, Outlet } from 'react-router-dom';

function EventListing() {
  const [activeTab, setActiveTab] = useState('pe'); // 'pe' for Previous Events, 'le' for Live Events, 'ue' for Upcoming Events

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='eventListing'>
      <div className="elInner">
        <div className="topOr"></div>
        <h4 className='miniTitle'>MOSAIC EVENTS</h4>
        {/* <div className="me">
          <h1 className='l-head'><strong>Event</strong> Listing</h1>
          <ul className='me-ev'>
            <li style={{ borderBottom: activeTab === 'pe' ? '2px solid #ffbd00' : 'none', fontWeight: activeTab === 'pe' ? '500' : '400' } } onClick={() => handleTabClick('pe')}><Link to={'/prevEvents'}>Previous Events</Link></li>
            <li style={{ borderBottom: activeTab === 'le' ? '2px solid #ffbd00' : 'none', fontWeight: activeTab === 'le' ? '500' : '400' }} onClick={() => handleTabClick('le')}><Link to={'/liveEvents'}>Live Events</Link></li>
            <li style={{ borderBottom: activeTab === 'ue' ? '2px solid #ffbd00' : 'none', fontWeight: activeTab === 'ue' ? '500' : '400' }} onClick={() => handleTabClick('ue')}><Link to={'/upEvents'}>Upcoming Events</Link></li>
          </ul>
        </div> */}
        <div className="allEvents">
            {/* <PrevEvents/> */}
            <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default EventListing;
