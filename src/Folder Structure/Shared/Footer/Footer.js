import React from 'react';
import './Footer.css';
import logoFooter from '../../../assets/logo-light.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer p-10 text-base-content">
                <div>
                    <Link to={'/'}><img src={logoFooter} alt="Logo" /></Link>
                    <p className='text-base text-gray-600'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                </div>
                <div>
                    <span className="footer_title">About</span>
                    <Link to={'/home'} className="link link-hover">Home</Link>
                    <Link to={'/service'} className="link link-hover">Service</Link>
                    <Link to={'/contact'} className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer_title">Company</span>
                    <Link to={'/why-car-doctor'} className="link link-hover">Why Car Doctor</Link>
                    <Link to={'/about'} className="link link-hover">About</Link>
                </div>
                <div>
                    <span className="footer_title">Support</span>
                    <Link to={'/Support'} className="link link-hover">Support Center</Link>
                    <Link to={'/feedback'} className="link link-hover">Feedback</Link>
                    <Link to={'/accessability'} className="link link-hover">Accessability</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;