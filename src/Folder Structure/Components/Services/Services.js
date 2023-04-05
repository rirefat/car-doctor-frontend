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

    const selectedServices = services.slice(0,6);
    return (
        <div className='services-section'>
            <SectionHeader
                title={"Our Service Area"}
                subtitle={"Service"}
                description={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
                center={true}
            ></SectionHeader>

            <div className="services-container mb-4">
                {
                    selectedServices.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className="btn-area flex items-center justify-center "><button className="btn mx-5 px-5 bg-primary-color border-transparent hover:bg-btn-hover-bg">More Services</button></div>
        </div>
    );
};

export default Services;