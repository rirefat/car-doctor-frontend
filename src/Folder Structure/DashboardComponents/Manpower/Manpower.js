import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useLoaderData } from 'react-router-dom';

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
                    // summeryBoxex.map(summery => <div key={summery.id} className='summery-box shadow-xl'>
                    //     <img src={summery.icon} alt="Icon" className='mb-4' />
                    //     <p className='font-medium'>{summery.name}: {summery.info?summery.info:"0"}</p>
                    // </div>)
                }
            </div>
        </div>
    );
};

export default Manpower;