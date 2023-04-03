import React from 'react';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import CoreFeatures from '../../Components/CoreFeatures/CoreFeatures';

const Home = () => {
    return (
        <div className='home'>
            <About></About>
            <Contact></Contact>
            <CoreFeatures></CoreFeatures>
        </div>
    );
};

export default Home;