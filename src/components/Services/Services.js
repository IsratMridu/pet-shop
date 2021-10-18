import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shams-jubair/fakedata/main/fakedata.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 gy-5">
                {
                    services.map(service =><Service
                    service = {service}
                    key ={service.id}
                    ></Service>)
                }


            </div>
        </div>
    );
};

export default Services;