import React from 'react';
import './SectionHeader.css';

const SectionHeader = (props) => {
    const { title, subtitle, description,center } = props;
    return (
        <div className={`section-header ${center ? 'text-center' : 'text-left'}`}>
            <h3 className='sub-title text-xl font-bold'>{subtitle ? subtitle : "Sub Title"}</h3>
            <h2 className='title font-bold text-4xl font-bold my-6'>{title ? title : "Title"}</h2>
            <p className='header-description font-normal text-base'>{description ? description : ""}</p>
        </div>
    );
};

export default SectionHeader;