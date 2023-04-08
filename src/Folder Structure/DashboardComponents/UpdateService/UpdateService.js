import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateService = () => {
    const service = useLoaderData();

    const handleUpdateService = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const img = event.target.img.value;

        const data = { name, description, price, img };
        const agree = window.confirm("Are you sure to update?");
        if (agree) {
            fetch(`http://localhost:5000/services/${service._id}`,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            .then(res=>res.json())
            .then(data=>{
                window.alert("Updated successfully.");
            })
        }
        else {
            window.alert("Request is rejected.")
        }
    }

    return (
        <div className='update-service p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'>Update Service: <span className='text-primary-color'>{service.name}</span></h1>

            <form onSubmit={handleUpdateService}>
                <div className='add-service-form-top grid grid-cols-3 gap-3.5 mb-3.5'>
                    <input defaultValue={service.name} name='name' type="text" placeholder="Product Name" className=" input input-bordered w-full " />
                    <input defaultValue={service.price} name='price' type="number" placeholder="Product Price" className=" input input-bordered w-full " />
                    <input defaultValue={service.img} name='img' type="url" placeholder="Product Image(314*314 px) URL" className=" input input-bordered w-full " />
                </div>
                <textarea defaultValue={service.description} name='description' required placeholder="Product Description" className="input-bordered textarea textarea-lg w-full" ></textarea>
                <button className="btn add-product-form-btn shadow-md w-full mt-6 bg-primary-color border-transparent">Update Service</button>
            </form>
        </div>
    );
};

export default UpdateService;