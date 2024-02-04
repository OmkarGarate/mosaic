import React from 'react'
import thc3 from '../Images/footer-images/instagram/thumb-card3.png'
import thc4 from '../Images/footer-images/instagram/thumb-card4.png'
import thc5 from '../Images/footer-images/instagram/thumb-card5.png'
import thc6 from '../Images/footer-images/instagram/thumb-card6.png'
import thc7 from '../Images/footer-images/instagram/thumb-card7.png'
import thc8 from '../Images/footer-images/instagram/thumb-card8.png'
import { FontAwesomeIcon } from 'react-fontawesome';
import insta from '../Images/footer-images/instagram-line.png'
import facebook from '../Images/footer-images/facebook-circle-line.png'
import twitter from '../Images/footer-images/twitter-x-line.png'
import youtube from '../Images/footer-images/youtube-line.png'
import env from '../Images/footer-images/env.png'
import location from '../Images/location.png'
// import { faFacebookF, faInstagram, faTwitter, faYoutube } from 'free-brands-svg-icons';


function Footer() {
    
  return (
    <div>
        <footer className="footer">
        <div className="container">
          <div className="about-us" data-aos="fade-right" data-aos-delay="200">
            <h1>MOSAIC</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, pariatur voluptate modi tempora distinctio nemo voluptatibus aliquid quod ut beatae.</p>
            <div className="connect-icons-1">
                <i className="fa-solid fa-location-dot">
                    <img src={location} alt="location" />
                    <span>Kharghar, Navi Mumbai</span></i>
                <i className="fa-solid fa-envelope">
                    <img src={env} alt="" />
                    <span>mosaiceventsXX@gmail.com</span></i>
              </div>
          </div>
          <div className="instagram" data-aos="fade-left" data-aos-delay="200">
            <h1>Instagram</h1>
            <div className="flex-row">
              <img src={thc3} alt="thc3"/>
              <img src={thc4} alt="thc4"/>
              <img src={thc5} alt="thc5"/>
            </div>
            <div className="flex-row">
              <img src={thc6} alt="thc6"/>
              <img src={thc7} alt="thc7"/>
              <img src={thc8} alt="thc8"/>
            </div>
            <p>Follow our instagram <span>#mosaic_events</span></p>
          </div>
          <div className="follow" data-aos="fade-left" data-aos-delay="200">
            <h1>Network</h1>
            <p>Let's Connect</p>
            <div className="connect-icons">
                <img src={insta} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
            </div>
          </div>
        </div>
            <div className="copy-rights flex-row">
              <h4 className="text-gray">
                Copyrights &copy;2024 All rights reserved | <span>MOSAIC</span>
              </h4>
            </div>
      </footer>
    </div>
  )
}

export default Footer