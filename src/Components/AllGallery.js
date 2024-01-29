import React from 'react'
import img1 from '../Images/Image1.jpg'
import img2 from '../Images/Image2.jpg'
import img3 from '../Images/Image3.jpg'
import img4 from '../Images/Image4.jpg'
import img5 from '../Images/Image5.jpg'
import img6 from '../Images/Image6.jpg'
import img7 from '../Images/Image7.jpg'
import img8 from '../Images/Image8.jpg'
import prev from "../Images/prev.png";  
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function AllGallery() {

    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8
    ]

    var k =0;

    const events = [];
      for (var i = 0; i < 40; i++) {
        events[i] = images[k];
      if(k===7)
      {
          k=0;
      }else{
          k++;
      }
      }

      const chunkSize = 8; // Set the number of events per row
      
  // Create an array of arrays, each containing chunkSize events
  const groupedEvents = Array.from(
    { length: Math.ceil(events.length / chunkSize) },
    (v, i) => events.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  useEffect(() => {
    // Scroll to the top with smooth behavior when the component mounts
    window.scrollTo({ top: 0});
    // window.scrollTo({ top: 0, behavior: 'smooth' }); //for smooth behavior
  }, []);
  
    
  return (
    <div className='lae photoGallery'>
        <Link to={"/"}><button className='backBtn'><img src={prev} alt="next" /></button></Link>
        <h4 className='miniTitle'>All GALLERY</h4>
        <h1 className='l-head'>Beautiful &  <strong>Unforgettable Times</strong></h1>
        <div className="gallery">
            {groupedEvents.map((events, rowIndex)=>(
                <div className="rowIndex" key={rowIndex}>
                    {events.map((eve, index)=>(
                    <div className={`evePhotos item${index + 1}`} key={index} >
                        <img src={eve} alt="" />
                    </div>
                ))}
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default AllGallery