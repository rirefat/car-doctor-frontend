import React, { useContext, useEffect, useState } from 'react';
import './Order.css';
import TopBanner from '../../Shared/TopBanner/TopBanner';
import { AuthContext } from '../../Contexts/UserContext';
import { Link } from 'react-router-dom';

const Order = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => { setOrders(data) })
    }, []);

    return (
        <div className='manage-order-page'>
            <TopBanner
                title={'Manage Orders'}
                subtitle={user.displayName}
            ></TopBanner>

            <div className="order-container mt-10">
                {
                    orders.map(order => <div>
                        <table className="table w-full ">
                            <tbody className=''>
                                <tr className=''>
                                    <td className='w-1/2'>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.product_img} alt="img" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order.product_name}</div>
                                                <div className="text-sm opacity-50">{order?.type}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='w-40'>
                                        <div>${order.product_price}</div>
                                    </td>
                                    <td>
                                        <Link ><button className="btn btn-ghost btn-xs">details</button></Link>
                                    </td>
                                    <th className='flex justify-end'>
                                        <div className="btn btn-sm btn-outline border-primary-color text-primary-color hover:border-transparent hover:bg-primary-color hover:text-white ml-4">Pending</div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Order;