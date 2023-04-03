import React from 'react';
import './AddService.css';
import TopBanner from '../../Shared/TopBanner/TopBanner';

const AddService = () => {
    return (
        <div className='add-service-page'>
            <TopBanner
                title={"Add Service"}
                subtitle={"--"}
            ></TopBanner>
            <div className="add-service-form my-16">
                <form>
                    <div className='add-service-form-top grid grid-cols-2 gap-3.5 mb-3.5'>
                        <input required type="text" placeholder="Service Name" className=" input w-full " />
                        <input required type="text" placeholder="Type" className=" input w-full " />
                        <input required type="number" placeholder="Service Cost" className=" input w-full " />
                        <input required type="url" placeholder="Service Image URL" className=" input w-full " />
                    </div>
                    <textarea required placeholder="Service Description" className=" textarea textarea-lg w-full" ></textarea>
                    <button className="btn add-service-form-btn shadow-md w-full mt-6 bg-primary-color">Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;