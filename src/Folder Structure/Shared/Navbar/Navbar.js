import React from 'react';
import './Navbar.css'
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { BsHandbag,BsSearch } from 'react-icons/bs';

const Navbar = () => {
    const navLinks = <>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </>
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
                <Link className='navbar-icon' to={'/search'}><BsSearch></BsSearch></Link>
                <Link to={'/sign-up'}><button className="btn btn-outline shadow-md">Sign Up</button></Link>
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