import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top myNav">
  <div className="container-fluid ">
    <Link className="navbar-brand fw-bold text-primary" to="/">K <span className='bg-primary ps-1 pe-1 text-white'>Local</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center ">
        <li className="nav-item">
          <Link className="nav-link text-dark " aria-current="page" to="/AboutKLocal">About KLocal</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/Blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/PopularPlaces">Popular Places</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/Explore">Explore</Link>
        </li>
       
        
      </ul>
      <form className="d-flex">
        
        <button className="btn bg-primary btn-sm text-white navBtn" >Add Listing</button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}
