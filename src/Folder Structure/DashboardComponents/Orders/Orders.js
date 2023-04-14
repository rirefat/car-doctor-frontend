import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Orders = () => {
    const totalOrders = useLoaderData();
    console.log(totalOrders);
    return (
        <div className='dashboard-services p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'><span className='text-primary-color'>Orders</span> At A Glance</h1>

            <div className="services-summery flex justify-between items-center p-4 border-b-2 border-stone-300 mb-4">
                <p className='text-xl font-medium'>All Orders: {totalOrders.length}</p>
                {/* <Link to={'/add-service'}><button className="shadow-xl btn btn-square btn-outline text-2xl hover:text-white"><IoMdAdd></IoMdAdd></button></Link> */}
            </div>

            <div className="manpower-container">
                {
                    totalOrders.map(order => <div className='manpower-container' key={order._id}>
                        <div className="overflow-x-auto w-full mb-2">
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <tbody>
                                        <tr>
                                            <td className='w-1/3'>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={order.product_img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{order.product_name}</div>
                                                        <div className="text-sm opacity-50">{order.type}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='w-2'>
                                                <p className='text-2xl font-semibold flex gap-4 text-sm opacity-50'>
                                                    <Link>{order.order_email}</Link>
                                                </p>
                                            </td>
                                            <td>
                                                <p>12/12/2020</p>
                                            </td>
                                            <th className='flex justify-end'>
                                                <select className="select select-error w-full max-w-xs">
                                                    <option disabled selected>Pending</option>
                                                    <option>Under Review</option>
                                                    <option>Confirm</option>
                                                    <option>Completed</option>
                                                </select>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Orders;