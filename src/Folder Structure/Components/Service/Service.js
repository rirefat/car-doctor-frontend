import React, { useContext } from 'react';
import './Service.css'
import { BiCartAdd } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import { ToastContainer, toast } from 'react-toastify';

const Service = (props) => {

    const { _id, img, name, description, price } = props.service;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const notify = () => toast(`"${name}" is added to your cart`);

    const addToCart = (id) => {
        if (user?.email) {
            const _id = id;
            const product_name = name;
            const product_img = img;
            const product_price = price;
            const order_email = user?.email;
            const qty = 1;
            const data = { _id, product_name, product_img, product_price, order_email, qty }

            fetch('http://localhost:5000/cart', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    notify();
                })
        }
        else {
            navigate('/login');
        }
    }
    return (
        <div className='single-service'>
            <div className="card w-80 bg-base-100 shadow-xl border-2 p-2">
                <figure><img src={img} alt="Service Img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='price text-lg text-primary-color font-bold'>Price: $ {price}</p>
                    <div className="card-actions flex justify-between">
                        <Link to={`/service-details/${_id}`}><button className="btn btn-primary bg-white text-primary-color border-primary-color hover:bg-primary-color hover:text-white hover:border-transparent">Details</button></Link>
                        {/* <Link onClick={()=>addToCart(_id)} className='add-to-cart'><BiCartAdd></BiCartAdd></Link> */}
                        <span onClick={() => addToCart(_id)} className='add-to-cart'><BiCartAdd></BiCartAdd></span>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Service;