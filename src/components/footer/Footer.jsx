import React from 'react'
import google_play from '../../assets/google_play.webp'
import app_store from '../../assets/app_store.webp'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div>
          <p>Need Help?</p>
          <a href="#" style={{display: "block"}}>About</a>
          <a href="#" style={{display: "block"}}>Blog</a>
        </div>
        <div>
          <p>Connect with Us</p>
          <div className="socialIcons">
            <span className="icon"><FaFacebookF /></span>
            <span className="icon"><FaInstagram /></span>
            <span className="icon"><FaTwitter /></span>
            <span className="icon"><FaLinkedin /></span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <span>@ 2023 HOTSTAR MINI. All Right Reserved.</span>
          <div className='other_links'>
            <a href="#">Hotstar</a>
            <a href="#">MovieDB API</a>
          </div>
        </div>
        <div>
          <img src={google_play} alt="" />
          <img src={app_store} alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer