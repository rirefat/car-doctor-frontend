import React, { useState } from 'react';
import './AdminDashboard.css'
import TopBanner from '../../Shared/TopBanner/TopBanner';

const AdminDashboard = () => {
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);
    const [team, setTeam] = useState([]);
    return (
        <div className='admin-dashboard'>
            <div className="dashboard-container shadow-xl">
                <TopBanner
                    title={"Admin Panel"}
                    subtitle={"Rafiul Islam Refat"}
                ></TopBanner>
            </div>
        </div>
    );
};

export default AdminDashboard;