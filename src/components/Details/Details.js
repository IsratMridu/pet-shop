import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {idNumber} = useParams();
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shams-jubair/fakedata/main/fakedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    // console.log(services);

    const result = services.find(single =>single.id === parseInt(idNumber));
    // console.log(result);
    
    
 
    

    

  
  
   
    return (
        <div>
            
      <div  className=" bg-success py-5 text-white">
      <img src={result?.image} className="img-fluid rounded-3" alt="result_image" />   
         <h1 className="mt-3">Name: {result?.name}</h1>
         <h4>Description: {result?.description}</h4>
         <h4>Cost: ${result?.cost}</h4>
         <button className="btn btn-danger mt-3">Purchase Vaccine</button>
      </div>
            
            
        </div>
    );
};

export default Details;