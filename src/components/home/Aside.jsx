import React from 'react'
import { Link } from 'react-router-dom'
import InstagramLogo from '../../assets/Instagram-4-3-2025.png'
import './Aside.css'

const Aside = () => {
  return (
    <div className='vh-100 p-0 m-0 position-fixed'>
      <div className='aside  p-4 bg-dark'>
        <img className='w-50' src={InstagramLogo} alt="Instagram Logo" />
        <nav>
          <ul className='lists d-flex flex-column text-white mt-4 align-items-start p-0 border-0'>
            <li><Link to="/" className="text-white text-decoration-none"><i className="bi bi-house-door-fill"></i>Home</Link></li>
            <li><Link to="/Search" className="text-white text-decoration-none"><i className="bi bi-search"></i>Search</Link></li>
            <li><i className="bi bi-compass"></i>Explore</li>
            <li><i className="bi bi-file-play-fill"></i>Reels</li>
            <li><i className="bi bi-chat-quote-fill"></i>Messages</li>
            <li><i className="bi bi-suit-heart"></i>Notification</li>
            <li><i className="bi bi-plus-square-dotted"></i>Create</li>
            <li><Link to="/profile" className='text-white text-decoration-none'><i className="bi bi-person-circle"></i>Profile</Link></li>
          </ul>

          <ul className='more d-flex flex-column text-white align-items-start p-0'>
            <li><i className="bi bi-list"></i>More</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Aside
