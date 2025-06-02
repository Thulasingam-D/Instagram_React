import React, { useEffect, useState } from 'react'
import './Search.css'
const Search = () => {
  const [search, setSearch] = useState("");

  const allPosts = [
    { id: 1, image: "https://via.placeholder.com/300?text=Post+1" },
    { id: 2, image: "https://via.placeholder.com/300?text=Post+2" },
    { id: 3, image: "https://via.placeholder.com/300?text=Post+3" },
    { id: 4, image: "https://via.placeholder.com/300?text=Post+4" },
    { id: 5, image: "https://via.placeholder.com/300?text=Post+5" },
    { id: 6, image: "https://via.placeholder.com/300?text=Post+6" },
    { id: 7, image: "https://via.placeholder.com/300?text=Post+7" },
    { id: 8, image: "https://via.placeholder.com/300?text=Post+8" },
    { id: 9, image: "https://via.placeholder.com/300?text=Post+9" },
  ];

  const filteredPosts = allPosts.filter((post) =>
    post.image.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4 w-50">

      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text bg-white">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            style={{ boxShadow: "none", borderColor: "#ccc", outline: "none" }}
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
      </div>

      {/* Posts Grid */}
      <div className="row row-cols-3 g-2">
        {filteredPosts.map((post) => (
          <div key={post.id} className="col">
            <img
              src={post.image}
              alt={`Post ${post.id}`}
              className="w-100 h-100 object-fit-cover"
              style={{ aspectRatio: "1/1" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search
