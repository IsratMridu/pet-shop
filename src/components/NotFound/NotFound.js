import React from 'react';
import './NotFound.css'
import notfound from '../images/error/3804949.jpg'
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <div>
             <Link to="/">
                <button className="btn btn-danger mt-5">Go Back</button>
             </Link>
            
            <img src={notfound} className="w-100" alt="404_image" />
            </div>

        </div>
    );
};

export default NotFound;