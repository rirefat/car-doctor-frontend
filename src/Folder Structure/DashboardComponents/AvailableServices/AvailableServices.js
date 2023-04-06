import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Table from '../Table/Table';
import { IoMdAdd } from 'react-icons/io';

const AvailableServices = () => {
    const availableServices = useLoaderData();
    console.log(availableServices.length)
    return (
        <div className='dashboard-services p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'><span className='text-primary-color'>Services</span> At A Glance</h1>

            <div className="services-summery flex justify-between items-center p-4 border-b-2 border-stone-300 mb-4">
                <p className='text-xl font-medium'>All Services: {availableServices.length}</p>
                <button className="shadow-xl btn btn-square btn-outline text-2xl hover:text-white"><IoMdAdd></IoMdAdd></button>
            </div>
            <div className="services-container">
                {
                    availableServices.map(singleService=><Table key={singleService._id} singleService={singleService}></Table>)
                }
            </div>
        </div>
    );
};

export default AvailableServices;