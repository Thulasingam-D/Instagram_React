import React, { useEffect, useState } from 'react'
import '../feed/Story.css'
import { Link } from 'react-router-dom'
const story = () => {

  const [story , setstory] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/data')
    .then((response)=>response.json())
    .then((data)=>setstory(data))
    .catch(err => console.log(err))
  },[])
  return (
    <div className='story d-flex gap-2 m-3'>
      {story.length > 0 ? (
        story.map((value, index) => (
          <div key={index}>
            <Link to="/viewstory" className="text-decoration-none text-dark">
              <div className='gradiant_border'>
                <img className='story_pic rounded-circle' src={value.profile} alt="" />
              </div>
              <p className='story_user text-truncate text-center' style={{ width: "80px" }}>
                {value.username}
              </p>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...[story]</p>
      )}
    </div>
  )
}

export default story
