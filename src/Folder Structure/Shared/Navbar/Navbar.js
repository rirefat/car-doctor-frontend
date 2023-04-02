import React from 'react';
import './Navbar.css'
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { BsHandbag,BsSearch } from 'react-icons/bs';

const Navbar = () => {
    const navLinks = <>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Content</a></li>
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
                <Link to={'/contact'}><button className="btn btn-outline shadow-md">Appointment</button></Link>
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