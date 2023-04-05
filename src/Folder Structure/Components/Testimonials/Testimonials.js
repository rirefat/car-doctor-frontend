import React from 'react';
import './Testimonials.css';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';

import img from '../../../assets/images/banner/1.jpg'

const Testimonials = () => {
    return (
        <div className='testimonials-section' id='testimonial'>
            <SectionHeader
                title={"Our Customers Say"}
                subtitle={"Testimonial"}
                description={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}
                center={true}
            ></SectionHeader>

            <div className="testimonial-container mt-16">
                
            </div>
        </div>
    );
};

export default Testimonials;