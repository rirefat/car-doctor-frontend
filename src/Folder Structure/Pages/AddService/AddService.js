import React from 'react';
import './AddService.css';
import TopBanner from '../../Shared/TopBanner/TopBanner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const notify = () => toast("New service is added successfully!");
    const addService = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const img = event.target.img.value;

        const data = { name, description, price, img };
        console.log(data);


        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                notify();
                event.target.reset();
            })
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
                        <input name='name' required type="text" placeholder="*Service Name" className=" input w-full " />
                        <input name='price' required type="number" placeholder="*Service Price" className=" input w-full " />
                        <input name='img' required type="url" placeholder="*Service Image(314*314 px) URL" className=" input w-full " />
                    </div>
                    <textarea name='description' required placeholder="*Service Description" className=" textarea textarea-lg w-full" ></textarea>
                    <button className="btn add-service-form-btn shadow-md w-full mt-6 bg-primary-color">Add Service</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddService;