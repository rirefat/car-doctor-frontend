import React from 'react';

const Manpower = () => {
    return (
        <div className='dashboard-manpower p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Our <span className='text-primary-color'>Manpower</span></h1>
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