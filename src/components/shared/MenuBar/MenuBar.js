import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Context/useAuth';


import './MenuBar.css'

const MenuBar = () => {
    const {user, handleLogOut} = useAuth();
  
    return (
        <div className=" bg-color">
           <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <nav className="navbar navbar-light bg-light">
  
</nav>

<img src="https://i.ibb.co/9NQwbqh/logo.png" className="img-fluid  ms-5" alt="img" />
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/register">Register</NavLink>
        </li>
        {
            user.email?
            <button className="btn btn-danger" onClick={handleLogOut}>Log Out {user.email}</button>
            :
            <li className="nav-item">
          <NavLink to="/login">Login</NavLink>
        </li>
        }
       
        
      </ul>
     
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default MenuBar;