import React from 'react';
import './Overview.css';
import { useEffect, useState } from 'react';

// Icons
import productsIcon from '../../../../src/assets/icons/deliveryt.svg';
import servicesIcon from '../../../../src/assets/icons/Wrench.svg';
import manPowerIcon from '../../../../src/assets/icons/team.svg';

const Overview = () => {
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);
    const [team, setTeam] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        fetch('http://localhost:5000/team')
            .then(res => res.json())
            .then(data => setTeam(data))
    }, []);

    const summeryBoxex = [
        { id: 1, icon: productsIcon, name: "Total Products", info: products.length },
        { id: 2, icon: servicesIcon, name: "All Services", info: services.length },
        { id: 3, icon: manPowerIcon, name: "Manpower", info: team.length },
        // { id: 4, icon: manPowerIcon, name: "Orders", info: team.length },
    ];

    return (
        <div className='dashboard-overview p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Overview At A Glance</h1>
            <div className="overview-container">
                {
                    summeryBoxex.map(summery => <div key={summery.id} className='summery-box shadow-xl'>
                        <img src={summery.icon} alt="Icon" className='mb-4' />
                        <p className='font-medium'>{summery.name}: {summery.info?summery.info:"0"}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Overview;