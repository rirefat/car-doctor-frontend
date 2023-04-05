import React, { useEffect, useState } from 'react';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    console.log(services);
    return (
        <div className='services-section'>
            <SectionHeader
                title={"Our Service Area"}
                subtitle={"Service"}
                description={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
                center={true}
            ></SectionHeader>

            <div className="services-container">
                {
                    services.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;