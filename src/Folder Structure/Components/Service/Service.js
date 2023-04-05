import React from 'react';

const Service = (props) => {
    const {_id, img, name, description, price} = props.service;
    return (
        <div className='single-service'>
            <div className="card w-80 bg-base-100 shadow-xl border-2 p-2">
                <figure><img src={img} alt="Service Img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='price text-lg text-primary-color font-bold'>Price: $ {price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-white text-primary-color border-primary-color hover:bg-primary-color hover:text-white hover:border-transparent">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;