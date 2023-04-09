import React from 'react';

import { IoMdAdd } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';
import { RxUpdate } from 'react-icons/rx';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

import { Link, useLoaderData } from 'react-router-dom';

const Manpower = () => {
    const availableManpower = useLoaderData()
    return (
        <div className='dashboard-manpower p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Our <span className='text-primary-color'>Manpower</span></h1>
            <div className="services-summery flex justify-between items-center p-4 border-b-2 border-stone-300 mb-4">
                <p className='text-xl font-medium'>Total Manpower: {availableManpower.length}</p>
                <button className="shadow-xl btn btn-square btn-outline text-2xl hover:text-white"><IoMdAdd></IoMdAdd></button>
            </div>
            <div className="manpower-container">
                {
                    availableManpower.map(person => <div className='manpower-container' key={person._id}>
                        <div className="overflow-x-auto w-full mb-2">
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <tbody>
                                        <tr>
                                            <td className='w-1/2'>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={person.picture} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{person.name}</div>
                                                        <div className="text-sm opacity-50">{person.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='w-2'>
                                                <p className='text-2xl font-semibold flex gap-4'>
                                                    <Link className='hover:text-blue-500' to={person.social_links.facebook}><FaFacebook></FaFacebook></Link>
                                                    <Link className='hover:text-blue-700' to={person.social_links.twitter}><FaTwitter></FaTwitter></Link>
                                                    <Link className='hover:text-blue-950' to={person.social_links.linkedin}><BsLinkedin></BsLinkedin></Link>
                                                </p>
                                            </td>
                                            <td>
                                                {/* <Link to={`/service-details/${_id}`}><button className="btn btn-ghost btn-xs">Details</button></Link> */}
                                            </td>
                                            <th className='flex justify-end'>
                                                <button className="btn btn-circle btn-outline text-lg mx-3 hover:text-white"><RxUpdate></RxUpdate></button>
                                                <button className="btn btn-circle btn-outline text-lg mx-3 hover:text-white"><AiFillDelete></AiFillDelete></button>
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

export default Manpower;