import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css'

const MenuBar = () => {
    return (
        <div className=" bg-color">
            <div className="container d-flex flex-wrap align-items-center justify-content-between ">
            <div className="py-3">
                <img src='https://i.ibb.co/9NQwbqh/logo.png' alt="img-logo" className="img-fluid" />
            </div>
            <div>
               <ul className="d-flex">
                   <li><NavLink to="/home">Home</NavLink></li>
                   <li><NavLink to="/about">About</NavLink></li>
                   <li><NavLink to="/services">Services</NavLink></li>
                   <li><NavLink to="/gallery">Gallery</NavLink></li>
                   <li><NavLink to="/contact">Contact</NavLink></li>
               </ul>
            </div>
            </div>
            
        </div>
    );
};

export default MenuBar;