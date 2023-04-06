import React from 'react';

const AvailableProducts = () => {
    return (
        <div className='dashboard-overview p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Available Products</h1>
            <div className="products-container">
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

export default AvailableProducts;