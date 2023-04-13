import React, { useContext } from 'react';
import './Product.css';
import { Link, useNavigate } from 'react-router-dom';
import { BiCartAdd } from 'react-icons/bi';
import { AuthContext } from '../../Contexts/UserContext';
import { toast } from 'react-toastify';

const Product = (props) => {
    const { user } = useContext(AuthContext);
    const { _id, img, name, description, price } = props.product;
    const navigate = useNavigate();
    const notify = () => toast(`"${name}" is added to your cart`);
    
    const addToCart = (id) => {
        if (user?.email) {
            const product = id;
            const product_name = name;
            const product_img = img;
            const product_price = price;
            const order_email = user?.email;
            const data = { product, product_name, product_img, product_price, order_email };

            fetch('http://localhost:5000/cart',{
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
                notify();
            })
        }
        else {
            navigate('/login');
        }
    }

    return (
        <div className='single-product'>
            <div className="card w-80 bg-base-100 shadow-xl border-2 p-2">
                <figure><img src={img} alt="Service Img" className='border-2 rounded-2xl' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='price text-lg text-primary-color font-bold'>Price: $ {price}</p>
                    <div className="card-actions flex justify-between">
                        <button className="btn btn-primary bg-white text-primary-color border-primary-color hover:bg-primary-color hover:text-white hover:border-transparent">Details</button>
                        <Link onClick={() => addToCart(_id)} className='add-to-cart'><BiCartAdd></BiCartAdd></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;