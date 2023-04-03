import React from 'react';
import './CoreFeatures.css';
import SectionHeader from '../../Shared/SectionHeader/SectionHeader';

import team from '../../../assets/icons/team.svg';
import support from '../../../assets/icons/support.svg';
import wrench from '../../../assets/icons/Wrench.svg';
import guranty from '../../../assets/icons/check.svg';
import delivery from '../../../assets/icons/deliveryt.svg';

const CoreFeatures = () => {
    const coreFeatures = [
        {id: 1, title: "Expert Team", icon:team},
        {id: 2, title: "Timely Delivery", icon:team},
        {id: 3, title: "24/7 Support", icon:support},
        {id: 4, title: "Best Equipments", icon:wrench},
        {id: 5, title: "100% Guranty", icon:guranty},
        {id: 6, title: "Product Delivery", icon:delivery},
    ]
    return (
        <div className='core-features'>
            <SectionHeader
                title={"Why Choose Us"}
                subtitle={"Core Features"}
                description={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
                center={true}
            ></SectionHeader>
            <div className="features-container my-15">
                {
                    coreFeatures.map(feature=><div key={feature.id} className='feature'>
                        <img src={feature.icon} alt="feature icon" className='mb-5'/>
                        <h4 className='font-bold'>{feature.title}</h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CoreFeatures;