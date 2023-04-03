import React from 'react';
import './TopBanner.css';

const TopBanner = (props) => {
    const {title, subtitle}=props;
    return (
        <div className='top-banner'>
            <h3 className="subtitle text-primary-color mb-3">{subtitle ? subtitle:'Subtitle'}</h3>
            <h2 className="title">{title ? title:'Title'}</h2>
        </div>
    );
};

export default TopBanner;