import React from 'react';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import CoreFeatures from '../../Components/CoreFeatures/CoreFeatures';
import Services from '../../Components/Services/Services';
import Products from '../../Components/Products/Products';
import Team from '../../Components/Team/Team';

const Home = () => {
    return (
        <div className='home'>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Products></Products>
            <Team></Team>
            <CoreFeatures></CoreFeatures>
        </div>
    );
};

export default Home;