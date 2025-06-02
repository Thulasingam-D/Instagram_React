import { useEffect, useState } from "react"

const Suggestions = () => {

    const [data,setdata] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/data')
        .then((response)=>response.json())
        .then((data)=>setdata(data))
        .catch((err)=>console.error(err))
    },[])

  return (
    <div className="m-4">
        <div className="d-flex align-items-center my-3">
        <p className="d-flex align-items-center my-auto fw-bold" style={{ height: '100px'}}>suggestions for you</p>
        <strong className="text-primary ms-auto">see all</strong>
        <i className="bi bi-x me-0 ms-2 fs-3 text-danger"></i>
        </div>
        {data.length >0 ?(
          <div>
          {data.map((value, index) => (
            <div key={index} className="d-flex align-items-center my-3">
              <img
                className="rounded-circle me-4"
                src={value.profile}
                alt=""
                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
              />
              <p className="me-auto mb-0">{value.username}</p>
        
              <div className="d-flex align-items-center ms-auto">
                <p className="text-primary mb-0">follow</p>
                <i className="bi bi-x me-0 ms-2 fs-3 text-danger"></i>
              </div>
            </div>
          ))}
        </div>
        
        ):(
          <p>Loading...[suggestions]</p>
        )}
       

       <div className="d-flex align-items-center mt-5">
        <i className="bi bi-c-circle me-2"></i>
        <p className="mb-0 fw-light" style={{ fontSize: 12 }}>2025 INSTAGRAM FROM META</p>
      </div>

    </div>
  )
}

export default Suggestions
