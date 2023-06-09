import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css'
import logo from '../../../assets/logo.svg';
import userImg from '../../../assets/images/User-Profile-PNG.png';
import { Link } from 'react-router-dom';
import { BsHandbag, BsSearch } from 'react-icons/bs';
import { RiVipCrown2Fill } from 'react-icons/ri';
import { AuthContext } from '../../Contexts/UserContext';


const Navbar = () => {
    const { user, adminMail, logOut } = useContext(AuthContext);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cart?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, []);

    const navLinks =
        <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/Products">Products</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("logout");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div> */}
                <Link to={'/'}><img src={logo} alt="Logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='navbar-icon' to={'/cart'}><BsHandbag></BsHandbag></Link>
                {/* {
                    (cart.length > 0) ?
                        <div className="indicator mr-5">
                            <Link className='navbar-icon' to={'/cart'}><BsHandbag></BsHandbag></Link>
                            <span className="indicator-item badge badge-secondary"></span> 
                        </div> :
                        <Link className='navbar-icon' to={'/cart'}><BsHandbag></BsHandbag></Link>
                } */}
                {
                    (user?.uid) ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL ? user.photoURL : userImg} className='shadow-lg border-solid border-2 border-gray-400 rounded-full' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><span className='text-primary-color font-semibold'>Welcome {user?.displayName}</span></li>
                                <li><Link to={'/user-profile'} className="justify-between">Profile</Link></li>
                                {
                                    (user.email===adminMail)?<li><Link to={'/admin-dashboard'} className="justify-start">Admin Panel<span className='text-amber-600 text-lg'><RiVipCrown2Fill></RiVipCrown2Fill></span></Link></li>:null
                                }
                                

                                <li><Link to={'/cart'}>Cart {cart.length>0 ? <span className="indicator-item badge badge-secondary bg-primary-color hover:text-primary-color">{cart?.length}</span>: ""} </Link></li>
                                <li><Link to={'/order'}>Orders</Link></li>
                                <li>
                                    <Link onClick={handleLogOut}>Log Out</Link>
                                </li>
                            </ul>
                        </div> :
                        <Link to={'/sign-up'}><button className="btn btn-outline shadow-md">Sign Up</button></Link>
                }
                {/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL ? user?.photoURL : userImg} className='shadow-lg border-solid border-2 border-gray-400 rounded-full' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">Profile</a>
                        </li>
                        <li><a>Settings</a></li>
                        <li>
                            <Link onClick={handleLogOut}><button className="btn btn-outline shadow-md">Log Out</button></Link>
                        </li>
                    </ul>
                </div> */}

            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;