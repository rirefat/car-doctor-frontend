import React, { useContext, useEffect, useState } from 'react';
import './Cart.css'
import { AuthContext } from '../../Contexts/UserContext';
import TopBanner from '../../Shared/TopBanner/TopBanner';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { RiArrowGoBackFill, RiArrowGoForwardLine } from 'react-icons/ri';

import emptyCart from '../../../assets/images/empty-cart.svg'

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, []);

    const confirmOrder = (item) => {
        const { _id, product_name, product_img, product_price, order_email, type } = item;
        const orderData = { product_name, product_img, product_price, order_email, type };
        console.log(orderData)
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                cartDltOne(_id);
            })
    }

    const cartDltOne = (id) => {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                const displayedItems = cart.filter(item => item._id !== id);
                setCart(displayedItems);
                console.log(data)
            })
    }

    const clearCart = (email) => {
        fetch(`http://localhost:5000/cart?email=${email}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setCart([]);
            })
    }

    return (
        <div className='cart-page'>
            <TopBanner
                title={'Cart Details'}
                subtitle={user.displayName}
            ></TopBanner>
            <div className="cart-container mt-10">
                {cart.length > 0 ?

                    cart.map(item => <div key={item._id}>
                        <table className="table w-full ">
                            <tbody className=''>
                                <tr className=''>
                                    <td className='w-1/2'>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.product_img} alt="img" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.product_name}</div>
                                                <div className="text-sm opacity-50">{item?.type}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='w-40'>
                                        <div>${item.product_price}</div>
                                    </td>
                                    <td>
                                        <Link to={`/${item.type}-details/${item._id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
                                    </td>
                                    <th className='flex justify-end'>
                                        <div onClick={() => confirmOrder(item)} className="btn btn-sm btn-outline btn-success ml-4">Confirm</div>
                                        <div onClick={() => cartDltOne(item._id)} className="btn btn-sm btn-outline border-primary-color text-primary-color hover:border-transparent hover:bg-primary-color hover:text-white ml-4">Remove</div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                    :
                    <div className="flex items-center justify-center">
                        <img src={emptyCart} alt="img" className='w-1/4' />
                    </div>
                }

                <div className="action-section mt-10 flex items-center justify-between">
                    <div className='flex gap-5'>
                        <Link to={'/services'} className="continue-shopping flex items-center hover:text-primary-color">
                            <span className="icon mx-2"><RiArrowGoBackFill></RiArrowGoBackFill></span>
                            Continue Shopping
                        </Link>
                        <Link to={'/order'} className="continue-shopping flex items-center hover:text-primary-color">
                            Manage Orders
                            <span className="icon mx-2"><RiArrowGoForwardLine></RiArrowGoForwardLine></span>
                        </Link>
                    </div>
                    {
                        (cart.length > 0 ?
                            <Link onClick={() => clearCart(user.email)} className="clear-cart flex items-center hover:text-primary-color">
                                <span className='icon mx-2'><BsTrash></BsTrash></span>
                                Clear Cart
                            </Link> : ""
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;