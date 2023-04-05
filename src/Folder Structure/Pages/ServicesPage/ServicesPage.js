import React, { useEffect, useState } from 'react';
import './ServicesPage.css';
import TopBanner from '../../Shared/TopBanner/TopBanner';
import Service from '../../Components/Service/Service';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='services-page'>
            <TopBanner
                title={"Our Available Services"}
                subtitle={"Services"}
            ></TopBanner>
            <div className="services-container my-16">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default ServicesPage;