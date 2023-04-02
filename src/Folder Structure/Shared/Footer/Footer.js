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
                    <p className='text-lg text-slate-400 mt-6'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                </div>
                <div>
                    <span className="footer_title text-lg font-semibold text-lg">About</span>
                    <Link to={'/home'} className="link link-hover text-base">Home</Link>
                    <Link to={'/service'} className="link link-hover text-base">Service</Link>
                    <Link to={'/contact'} className="link link-hover text-base">Contact</Link>
                </div>
                <div>
                    <span className="footer_title text-lg font-semibold text-lg">Company</span>
                    <Link to={'/why-car-doctor'} className="link link-hover text-base">Why Car Doctor</Link>
                    <Link to={'/about'} className="link link-hover text-base">About</Link>
                </div>
                <div>
                    <span className="footer_title text-lg font-semibold text-lg">Support</span>
                    <Link to={'/Support'} className="link link-hover text-base">Support Center</Link>
                    <Link to={'/feedback'} className="link link-hover text-base">Feedback</Link>
                    <Link to={'/accessability'} className="link link-hover text-base">Accessability</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;