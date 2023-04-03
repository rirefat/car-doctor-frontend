import React from 'react';
import './NotFoundPage.css';
import err404 from '../../../assets/images/err404.png';
import Navbar from '../../Shared/Navbar/Navbar';

const NotFoundPage = () => {
    return (
        <div className='not-found-page'>
            <Navbar></Navbar>
            <div className="container">
                <img src={err404} alt="" />
                <h4 className='text-center mt-5 text-xl'>The page you're looking for is not available.</h4>
            </div>
        </div>
    );
};

export default NotFoundPage;