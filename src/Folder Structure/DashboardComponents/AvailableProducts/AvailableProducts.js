import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { AiFillDelete } from 'react-icons/ai';
import { RxUpdate } from 'react-icons/rx';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AvailableProducts = () => {
    const notify = () => toast("Deleted Successfully!");
    const availableProducts = useLoaderData();
    const [displayedProducts, setDisplayedProducts]=useState(availableProducts);

    const handleDeleteProduct=(id)=>{
        const agree = window.confirm("Are you sure to delete?");
        if(agree){
            fetch(`http://localhost:5000/products/${id}`,{
                method: "DELETE",
                headers: {
                    'content-type': 'applicaion/json',
                }
            })
                .then(res=>res.json())
                .then(data=>{
                    const newSet = availableProducts.filter(product => product._id !== id);
                    setDisplayedProducts(newSet)
                    notify();
                })
        }
        else{
            window.confirm("Request denied.");
        }
    }

    const handleUpdateProduct=(id)=>{}

    return (
        <div className='dashboard-products p-8'>
            <h1 className='text-center text-2xl font-semibold mb-8'><span className='text-primary-color'>Products</span> At A Glance</h1>

            <div className="products-summery flex justify-between items-center p-4 border-b-2 border-stone-300 mb-4">
                <p className='text-xl font-medium'>All Products: {displayedProducts.length}</p>
                <Link to={'/add-product'}><button className="shadow-xl btn btn-square btn-outline text-2xl hover:text-white"><IoMdAdd></IoMdAdd></button></Link>
            </div>

            <div className="products-container">
                {
                    displayedProducts.map(singleProduct => <div key={singleProduct._id}>
                        <div className="overflow-x-auto w-full mb-2">
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <tbody>
                                        <tr>
                                            <td className='w-1/2'>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={singleProduct.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{singleProduct.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='w-2'>
                                                <p className='font-semibold'>$ {singleProduct.price}</p>
                                            </td>
                                            <td>
                                                {/* <Link to={`/service-details/${_id}`}><button className="btn btn-ghost btn-xs">Details</button></Link> */}
                                            </td>
                                            <th className='flex justify-end'>
                                                <button onClick={()=>handleUpdateProduct(singleProduct._id)} className="btn btn-circle btn-outline text-lg mx-3 hover:text-white"><RxUpdate></RxUpdate></button>
                                                <button onClick={()=>handleDeleteProduct(singleProduct._id)} className="btn btn-circle btn-outline text-lg mx-3 hover:text-white"><AiFillDelete></AiFillDelete></button>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default AvailableProducts;