import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { BiCartAdd } from 'react-icons/bi';

const Product = (props) => {
    const {_id, img, name, description, price} = props.product;
    return (
        <div className='single-product'>
            <div className="card w-80 bg-base-100 shadow-xl border-2 p-2">
                <figure><img src={img} alt="Service Img" className='border-2 rounded-2xl'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='price text-lg text-primary-color font-bold'>Price: $ {price}</p>
                    <div className="card-actions flex justify-between">
                        <button className="btn btn-primary bg-white text-primary-color border-primary-color hover:bg-primary-color hover:text-white hover:border-transparent">Details</button>
                        <Link className='add-to-cart'><BiCartAdd></BiCartAdd></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;