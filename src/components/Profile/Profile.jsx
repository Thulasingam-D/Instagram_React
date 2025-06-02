import React from 'react'

const Profile = () => {
    const posts = Array(9).fill("https://via.placeholder.com/300");
  
    return (
      <div className="container py-4">
        {/* Profile Section */}
        <div className="d-flex flex-column flex-md-row align-items-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            className="rounded-circle me-md-5 mb-3 mb-md-0"
            style={{ width: "150px", height: "150px" }}
            alt="Profile"
          />
          <div className="flex-grow-1">
            <div className="d-flex align-items-center mb-3">
              <h4 className="me-3 mb-0">username</h4>
              <button className="btn btn-sm btn-outline-secondary me-2">Edit Profile</button>
              <i className="bi bi-gear fs-4"></i>
            </div>
            <div className="d-flex mb-2">
              <p className="me-4 mb-0"><strong>34</strong> posts</p>
              <p className="me-4 mb-0"><strong>512</strong> followers</p>
              <p className="mb-0"><strong>221</strong> following</p>
            </div>
            <p className="fw-bold mb-0">Full Name</p>
            <p className="text-muted">This is the bio of the user. #react #bootstrap</p>
          </div>
        </div>
  
        {/* Story Highlights */}
        <div className="d-flex mb-4 overflow-auto">
          {["Travel", "Food", "Work"].map((item, index) => (
            <div key={index} className="text-center me-3">
              <div className="rounded-circle border p-1" style={{ width: "80px", height: "80px" }}>
                <img
                  src="https://via.placeholder.com/80"
                  className="rounded-circle w-100 h-100"
                  alt={item}
                />
              </div>
              <small>{item}</small>
            </div>
          ))}
        </div>
  
        {/* Tabs */}
        <div className="border-top d-flex justify-content-center text-center">
          <div className="mx-4 py-2">
            <i className="bi bi-grid-3x3 me-1"></i> POSTS
          </div>
          <div className="mx-4 py-2 text-muted">
            <i className="bi bi-camera-reels me-1"></i> REELS
          </div>
          <div className="mx-4 py-2 text-muted">
            <i className="bi bi-person-square me-1"></i> TAGGED
          </div>
        </div>
  
        {/* Posts Grid */}
        <div className="row row-cols-3 g-1 mt-1">
          {posts.map((src, index) => (
            <div className="col" key={index}>
              <img src={src} alt="Post" className="w-100 h-100 object-fit-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Profile
