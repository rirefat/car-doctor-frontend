import React from 'react';
import './Testimonials.css';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';

const Testimonials = () => {
    return (
        <div className='testimonials-section'>
            <SectionHeader
                title={"Our Customers Say"}
                subtitle={"Testimonial"}
                description={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}
                center={true}
            ></SectionHeader>
        </div>
    );
};

export default Testimonials;