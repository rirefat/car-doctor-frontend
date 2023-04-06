import React from 'react';

const AvailableServices = () => {
    return (
        <div className='dashboard-services p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Services At A Glance</h1>
            <div className="services-container">
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

export default AvailableServices;