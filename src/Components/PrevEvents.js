import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function PrevEvents() {
    const [slide, setSlide] = useState({
        'transform': 'translateX(0px)'
    });
    const [n, setN] = useState(1);

    const events = [];
    for (var i = 0; i < 20; i++) {
        events[i] = "Previous event" + (i + 1); // Adjusted to start from "event1"
    }

    const chunkSize = 3; // Set the number of events per row

    // Create an array of arrays, each containing chunkSize events
    const groupedEvents = Array.from({ length: Math.ceil(events.length / chunkSize) }, (v, i) =>
        events.slice(i * chunkSize, i * chunkSize + chunkSize)
    );

    const goToPrev = () => {
        const trs = n === 1 ? 0 : (n - 2) * (-535);
        setN(n === 1 ? 1 : n - 1);

        setSlide({
            'transform': `translateX(${trs}px)`
        });
    };

    const goToNext = () => {
        const trs = n === Math.ceil(events.length / 3) ? (Math.ceil(events.length / 3) - 1 )* (-535): n * (-535);
        setN(n === Math.ceil(events.length / 3) ? Math.ceil(events.length / 3) : n + 1);

        setSlide({
            'transform': `translateX(${trs}px)`
        });
    };

    console.log(n);
    console.log(Math.ceil(events.length / 5));

    return (
        <>
        <div className="me">
          <h1 className='l-head'><strong>Event</strong> Listing</h1>
          <ul className='me-ev'>
            <li style={{ borderBottom:'2px solid #ffbd00' , fontWeight:'500' } }><Link to={'/prevEvents'}>Previous Events</Link></li>
            <li><Link to={'/liveEvents'}>Live Events</Link></li>
            <li><Link to={'/upEvents'}>Upcoming Events</Link></li>
          </ul>
        </div>
            <div className='elEvents' style={slide}>
                {groupedEvents.map((group, rowIndex) => (
                    <div key={rowIndex} className='eventRow'>
                        {group.map((eve, index) => (
                            <div key={index} className='elEve'>{eve}</div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="ELbtns">
                <button className="prev" onClick={goToPrev}>prev</button>
                <button className="next" onClick={goToNext}>next</button>
            </div>
        </>
    );
}

export default PrevEvents;
