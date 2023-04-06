import React from 'react';
import './AddProduct.css';
import TopBanner from '../../Shared/TopBanner/TopBanner';
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = () => {
    const notify = () => toast("New Product is added successfully!");

    const addProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const img = event.target.img.value;

        const data = { name, description, price, img };
        console.log(data);


        fetch('http://localhost:5000/products', {
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
        <div className='add-product-page'>
            <TopBanner
                title={"Add Product"}
                subtitle={"--"}
            ></TopBanner>
            <div className="add-product-form my-16">
                <form onSubmit={addProduct}>
                    <div className='add-product-form-top grid grid-cols-3 gap-3.5 mb-3.5'>
                        <input name='name' required type="text" placeholder="*Product Name" className=" input w-full " />
                        <input name='price' required type="number" placeholder="*Product Price" className=" input w-full " />
                        <input name='img' required type="url" placeholder="*Product Image(314*314 px) URL" className=" input w-full " />
                    </div>
                    <textarea name='description' required placeholder="*Product Description" className=" textarea textarea-lg w-full" ></textarea>
                    <button className="btn add-product-form-btn shadow-md w-full mt-6 bg-primary-color">Add Product</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;