import React, { useEffect, useState } from 'react'
import '../feed/Feed.css'

const Feed = () => {

    const [post, setpost] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/data')
        .then((response) => response.json())
        .then((post) => setpost(post))
        .catch((error) => console.log(error))
    },[])
  return (

    <div className=''>

<div className="container-fluid px-3 px-md-5">
  <div className="row justify-content-center">
    <div className="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11">

      {post.length > 0 ? (
        post.map((post) => (
          <div className="my-5 mx-1 mx-sm-3 border-top" key={post.id}>

            {/* Profile */}
            <div className="profile_pic d-flex align-items-center m-3">
              <img className="rounded-circle" src={post.profile} alt="" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
              <p className="ms-3 mb-0">{post.username}</p>
            </div>

            {/* Post Image */}
            <div>
              <img className="post_img rounded w-100" src={post.post} alt="" />
            </div>

            {/* Icons */}
            <div className="lsc d-flex align-items-center m-3">
              <i className="bi bi-heart fs-3 mx-2"></i>
              <i className="bi bi-send mx-2 fs-3"></i>
              <i className="bi bi-chat mx-2 fs-3"></i>
              <i className="bi bi-bookmark ms-auto fs-3"></i>
            </div>

            {/* Caption and Timestamp */}
            <div className="d-flex justify-content-between m-3">
              <p className="mb-0">{post.caption}</p>
              <p className="mb-0 text-muted" style={{ fontSize: '0.9rem' }}>{post.timestamp}</p>
            </div>

          </div>
        ))
      ) : (
        <div>loading...[feed]</div>
      )}

    </div>
  </div>
</div>

    </div>
  )
}

export default Feed
