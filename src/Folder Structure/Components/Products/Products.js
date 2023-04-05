import React, { useEffect, useState } from 'react';
import './Products.css';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const selectedProducts = products.slice(0, 6);

    return (
        <div className='products-section'>
            <SectionHeader
                title={"Browse Our Products"}
                subtitle={"Popular Products"}
                description={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
                center={true}
            ></SectionHeader>

            <div className="products-container mb-4">
                {
                    selectedProducts.map(service => <Product key={service._id} service={service}></Product>)
                }
            </div>
            <div className="btn-area flex items-center justify-center ">
                <Link to={'/products'}><button className="btn mx-5 px-5 bg-primary-color border-transparent hover:bg-btn-hover-bg">More Products</button></Link>
            </div>
        </div>
    );
};

export default Products;