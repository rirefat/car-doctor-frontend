import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateService = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div className='update-service p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Update Service: <span className='text-primary-color'>{service.name}</span></h1>
        </div>
    );
};

export default UpdateService;