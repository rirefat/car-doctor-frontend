import React from 'react';
import './About.css';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';
import mechanic from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="big-screen">
                    <img className='mechanic-img' src={mechanic} alt="Car Mechanic Img" />
                    <img className='parts-img' src={parts} alt="Car Parts" />
                </div>
                {/* <div className="small-screen">
                    <img className='mechanic-img' src={mechanic} alt="Car Mechanic Img" />
                    <img className='parts-img' src={parts} alt="Car Parts" />
                </div> */}
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

                <button className="btn shadow-md my-4">Get More Info</button>
            </div>
        </div>
    );
};

export default About;