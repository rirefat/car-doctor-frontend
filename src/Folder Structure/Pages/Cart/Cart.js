import React, { useContext, useEffect, useState } from 'react';
import './Cart.css'
import { AuthContext } from '../../Contexts/UserContext';

const Cart = () => {
    const { user } = useContext(AuthContext);
    // const [cart, setCart] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/cart?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setCart(data))
    // }, []);

    return (
        <div className='cart-page'>
            <h1>Products on your cart: </h1>
        </div>
    );
};

export default Cart;