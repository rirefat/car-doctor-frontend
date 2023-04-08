import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillDelete } from 'react-icons/ai';
import { RxUpdate } from 'react-icons/rx';

const Table = (props) => {
    const name = props.singleService?.name;
    const img = props.singleService?.img;
    const price = props.singleService?.price;
    const _id = props.singleService?._id;

    const handleServiceDelete = props.handleServiceDelete;
    
    return (
        <div className="overflow-x-auto w-full mb-2">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        <tr>
                            <td className='w-1/2'>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className='font-semibold'>$ {price}</p>
                            </td>
                            <td>
                                <Link to={`/service-details/${_id}`}><button className="btn btn-ghost btn-xs">Details</button></Link>
                            </td>
                            <th className='flex justify-end'>
                            <Link to={`/admin-dashboard/update-service/${_id}`}><button className="btn btn-circle btn-outline text-lg mx-3 hover:text-white"><RxUpdate></RxUpdate></button></Link> 
                                <button onClick={() => handleServiceDelete(_id)} className="btn btn-circle btn-outline text-lg mx-3 hover:text-white"><AiFillDelete></AiFillDelete></button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;