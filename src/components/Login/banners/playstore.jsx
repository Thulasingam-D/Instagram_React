import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/components/Login/banners/Playstore.css'

const playstore = () => {
  return (
    <div className="d-flex justify-content-center bg-black">
    <div className="google-play-card d-flex align-items-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Get it on Google Play"
        className="google-play-img"
      />
    </div>
  </div>
  )
}

export default playstore
