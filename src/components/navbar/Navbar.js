import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi';
import {BsPerson} from 'react-icons/bs';
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube} from 'react-icons/fa';
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import './Navbar.css';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav)


  return (
    <div className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className='logo'>
        <h2>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Views</li>  
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" />
        <BsPerson className="icon" />
      </div>
      <div className="hamberger" onClick={handleNav}>
        <HiOutlineMenuAlt4 className="icon" />
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">  
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>Book</li>
          <li>Views</li>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
