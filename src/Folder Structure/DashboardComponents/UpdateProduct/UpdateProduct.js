import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className='update-product p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Update Product: <span className='text-primary-color'>{product.name}</span></h1>
            <form action="">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> 
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

            <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>

            <button className="btn btn-outline">Button</button>
            </form>
        </div>
    );
};

export default UpdateProduct;