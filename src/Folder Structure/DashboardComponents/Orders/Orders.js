import React from 'react';

const Orders = () => {
    return (
        <div className='dashboard-services p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'><span className='text-primary-color'>Orders</span> At A Glance</h1>

            <div className="services-summery flex justify-between items-center p-4 border-b-2 border-stone-300 mb-4">
                <p className='text-xl font-medium'>All Orders: 0</p>
                {/* <Link to={'/add-service'}><button className="shadow-xl btn btn-square btn-outline text-2xl hover:text-white"><IoMdAdd></IoMdAdd></button></Link> */}
            </div>
        </div>
    );
};

export default Orders;