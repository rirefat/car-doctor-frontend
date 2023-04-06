import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Table from '../Table/Table';
import { IoMdAdd } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';

const AvailableServices = () => {
    const notify = () => toast("Deleted Successfully!");
    const availableServices = useLoaderData();
    const [displayedServices, setDisplayedServices]=useState(availableServices);    

    const handleServiceDelete = (id) => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                const newServices = availableServices.filter(service=> service._id !== id);
                setDisplayedServices(newServices);
                notify();
            })
    }

    return (
        <div className='dashboard-services p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'><span className='text-primary-color'>Services</span> At A Glance</h1>

            <div className="services-summery flex justify-between items-center p-4 border-b-2 border-stone-300 mb-4">
                <p className='text-xl font-medium'>All Services: {displayedServices.length}</p>
                <Link to={'/add-service'}><button className="shadow-xl btn btn-square btn-outline text-2xl hover:text-white"><IoMdAdd></IoMdAdd></button></Link>
            </div>
            <div className="services-container">
                {
                    displayedServices.map(singleService => <Table key={singleService._id} singleService={singleService} handleServiceDelete={handleServiceDelete}></Table>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default AvailableServices;