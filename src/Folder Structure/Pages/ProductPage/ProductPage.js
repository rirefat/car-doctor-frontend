import React, { useEffect, useState } from 'react';
import './ProductPage.css'
import TopBanner from '../../Shared/TopBanner/TopBanner';
import Product from '../../Components/Product/Product';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='products-page'>
            <TopBanner
                title={"Our Available Products"}
                subtitle={"Products"}
            ></TopBanner>
            <div className="products-container my-16">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default ProductPage;