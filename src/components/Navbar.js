import React from 'react';
import App from '../App';
import {Link, link} from 'react-router-dom';

export default function Pavbar(self){
  
return(

<>
<nav className={`navbar navbar-expand-lg navbar-${self.okay} bg-${self.okay}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">{self.tittle}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Time Creators</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">about</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="https://www.youtube.com/c/TIMECREATORS">Subscribe to my channel</a></li>
            <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=ITklrIVGLSg&t=11s">Increase My Views</a></li>
            <li><hr className="dropdown-divider" /> </li>
            <li><a className="dropdown-item" href="https://www.linkedin.com/in/time-creators-6ba061216/">follow me on linkedin</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Contact">Contact Us</Link>
        </li>
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input> */}
        <button id="lom" className="btn btn-outline-success" type="button" onClick={self.func}>{self.name}</button>
      </form>
    </div>
  </div>
</nav>
</>
);
}