import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className='hero-section text-white'>
            <div className="hero-container rounded-lg">
                <h1>Affordable Price For Car Servicing</h1>
                <p className='font-light'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="btn-container">
                    <Link to={'/services'}><button className="btn bg-primary-color text-white mr-5 hover:bg-btn-hover-bg">Discover More</button></Link>
                    <Link to={'/sign-up'}><button className="btn btn-outline text-white hover:bg-primary-color">Join Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;