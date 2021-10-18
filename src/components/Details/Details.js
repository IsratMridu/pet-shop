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
    const result = services.find(service => service.id === idNumber);
    console.log(result);
    

    

  
  
   
    return (
        <div>
            
         
            
            
        </div>
    );
};

export default Details;