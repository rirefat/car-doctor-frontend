import React from 'react';
import './AddService.css';
import TopBanner from '../../Shared/TopBanner/TopBanner';

const AddService = () => {
    const addService=(event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const img = event.target.img.value;

        const data ={name, description, price, img};
        console.log(data);
        event.target.reset();
    }

    return (
        <div className='add-service-page'>
            <TopBanner
                title={"Add Service"}
                subtitle={"--"}
            ></TopBanner>
            <div className="add-service-form my-16">
                <form onSubmit={addService}>
                    <div className='add-service-form-top grid grid-cols-3 gap-3.5 mb-3.5'>
                        <input name='name' required type="text" placeholder="Service Name" className=" input w-full " />
                        <input name='price' required type="number" placeholder="Service Price" className=" input w-full " />
                        <input name='img' required type="url" placeholder="Service Image URL" className=" input w-full " />
                    </div>
                    <textarea name='description' required placeholder="Service Description" className=" textarea textarea-lg w-full" ></textarea>
                    <button className="btn add-service-form-btn shadow-md w-full mt-6 bg-primary-color">Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;