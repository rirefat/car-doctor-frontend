import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div className='update-product p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Update Product: <span className='text-primary-color'>{service.name}</span></h1>
        </div>
    );
};

export default UpdateProduct;