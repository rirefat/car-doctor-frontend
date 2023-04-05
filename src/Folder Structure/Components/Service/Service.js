import React from 'react';
import './Service.css'
import { BiCartAdd } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id, img, name, description, price} = props.service;
    return (
        <div className='single-service'>
            <div className="card w-80 bg-base-100 shadow-xl border-2 p-2">
                <figure><img src={img} alt="Service Img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='price text-lg text-primary-color font-bold'>Price: $ {price}</p>
                    <div className="card-actions flex justify-between">
                        <Link to={`/service-details/${_id}`}><button className="btn btn-primary bg-white text-primary-color border-primary-color hover:bg-primary-color hover:text-white hover:border-transparent">Details</button></Link>
                        <Link to={`/cart/${_id}`} className='add-to-cart'><BiCartAdd></BiCartAdd></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;