import React from 'react';
import './About.css';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                left section
            </div>
            <div className="about-right text-left">
                <div className="section-title">
                    <SectionHeader
                        title={"We are qualified & of experience in this field"}
                        subtitle={"About Us"}
                        center={false}
                    ></SectionHeader>
                </div>
                <p className='description'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='description'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                <button className="btn shadow-md">Get More Info</button>
            </div>
        </div>
    );
};

export default About;