import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {name, cost , image, id} = props.service;
    // console.log(props.service);
    return (
        <div>
            <div className="col bg-success py-5 rounded-3 text-white size">
            <img src={image} alt="images" className="w-75 mx-auto mb-5 rounded-3"/>
                <h3>Name: {name}</h3>
                <h4>Cost: ${cost}</h4>
               <Link to={`/details/${id}`}> 
               <button className="btn btn-danger my-3">Details</button>
               </Link>
                

            </div>
        </div>
    );
};

export default Service;