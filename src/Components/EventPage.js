import React from 'react'
import '../css/eventPage.css'
import eveImg from '../Images/Music-Festival-Poster-Design-1.jpg'
import prev from "../Images/prev.png";  
import { Link } from 'react-router-dom'

function EventPage() {
  return (
    <>
      <Link to={"/"}><button className='backBtn'><img src={prev} alt="next" /></button></Link>
    <div className="box">
    <div className="poster">
      <img src={eveImg} alt="Poster"/>
    </div>
    <div className="description">
        <h1>MUSIC FESTIVAL 23 MAY</h1>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo illo ipsam nam at nulla enim quisquam.</p>
        <div className="event-info">
            <h3>Event Information:</h3>
            <p><strong>Date:</strong> February 15, 2024</p>
            <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
            <p><strong>Venue:</strong> Kharghar, Navi Mumbai</p>
            <p><strong>Entry Fees:</strong> Rs:50/-</p>
            <p><strong>Dress Code:</strong> Semi-formal</p>
            <div className="register-button">
                <button>Register Now</button>
            </div>
            
     </div>
</div>
    </div>
    </>
  )
}

export default EventPage