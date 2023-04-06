import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from '../Table/Table';

const AvailableServices = () => {
    const availableServices = useLoaderData();
    console.log(availableServices.length)
    return (
        <div className='dashboard-services p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Services At A Glance</h1>
            <div className="services-container">
                {
                    availableServices.map(singleService=><Table key={singleService._id} singleService={singleService}></Table>)
                }
            </div>
        </div>
    );
};

export default AvailableServices;