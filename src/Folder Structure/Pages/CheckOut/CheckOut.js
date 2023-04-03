import React from 'react';
import TopBanner from '../../Shared/TopBanner/TopBanner';
import './CheckOut.css'

const CheckOut = () => {
    return (
        <div className='checkout-page'>
            <TopBanner
                title={"Check Out"}
                subtitle={"--"}
            ></TopBanner>
            <div className="checkout-form my-16">
                <form>
                    <div className='grid grid-cols-2 gap-3.5'>
                        <input type="text" placeholder="First Name" className=" input w-full " />
                        <input type="text" placeholder="Last Name" className=" input w-full " />
                        <input type="number" placeholder="Your Phone" className=" input w-full " />
                        <input type="email" placeholder="Your Email" className=" input w-full " />
                    </div>
                    <textarea placeholder="Bio" className=" textarea textarea-lg w-full" ></textarea>
                    <button className="btn checkout-form-btn shadow-md w-full mt-6 bg-primary-color">Order Confirm</button>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;