import React from 'react';
import './ServiceDetails.css';
import TopBanner from '../../Shared/TopBanner/TopBanner';
import { Link } from 'react-router-dom';

import serviceImg from '../../../assets/images/banner/3.jpg'
import serviceImgFeature from '../../../assets/images/banner/2.jpg'
import step1 from '../../../assets/icons/step-1.svg'
import step2 from '../../../assets/icons/step-2.svg'
import step3 from '../../../assets/icons/step-3.svg'

const ServiceDetails = () => {
    const serviceFeatures =[
        {
            id: 1,
            title: "Instant Car Services",
            description: "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
        },
        {
            id: 2,
            title: "24/7 Quality Service",
            description: "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
        },
        {
            id: 3,
            title: "Easy Customer Services",
            description: "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
        },
        {
            id: 4,
            title: "Budget Friendly Services",
            description: "It uses a dictionary of over 200 Latin words, combined with a model sentence structures."
        },
    ];

    const serviceSteps = [
        {id: 1, icon: step1, title: "STEP 1", desc: "It uses a dictionary of over 200."}, 
        {id: 2, icon: step2, title: "STEP 2", desc: "It uses a dictionary of over 200."}, 
        {id: 3, icon: step3, title: "STEP 3", desc: "It uses a dictionary of over 200."}, 
    ];

    return (
        <div className='service-details'>
            <div className="top-banner">
                <TopBanner
                    title={"Service Name"}
                    subtitle={"Service Details"}
                ></TopBanner>
                <div className="breadcrumb">
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li>
                                <Link to={'/home'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={'/services'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                Service Name
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="main-body">
                <div className="left-section">
                    <img src={serviceImg} alt="Service Img" className='feature-img'/>
                    <h2 className='service-title text-3xl font-semibold my-10'>Service Name</h2>
                    <p className='service-description text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                    <div className="service-features">
                        {
                            serviceFeatures.map((feature)=><div key={feature.id} className='service-feature'>
                                <h3 className='font-bold text-lg mb-5'>{feature.title}</h3>
                                <p className='text-secondary-text-color'>{feature.description}</p>
                            </div>)
                        }
                    </div>

                    <p className='service-description text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                    <h2 className='text-3xl font-semibold my-10'>3 Simple Steps to Process</h2>
                    <p className='service-description text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                    <div className="servicing-steps my-8">
                        {
                            serviceSteps.map((step)=><div key={step.id} className='servicing-step'>
                                <img src={step.icon} alt="Service Step" />
                                <h3 className='font-bold text-lg mb-5 text-center mt-4'>{step.title}</h3>
                                <p className='text-secondary-text-color text-center'>{step.desc}</p>
                            </div>)
                        }
                    </div>
                    <img src={serviceImgFeature} alt="Service Img" className='feature-img mb-8'/>
                </div>


                <div className="right-section">
                    r
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;