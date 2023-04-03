import React from 'react';
import './ServiceDetails.css';
import TopBanner from '../../Shared/TopBanner/TopBanner';
import { Link } from 'react-router-dom';

import { BsFiletypeDoc, BsFillCloudArrowDownFill,BsArrowRight } from 'react-icons/bs';

import serviceImg from '../../../assets/images/banner/3.jpg'
import serviceImgFeature from '../../../assets/images/banner/2.jpg'
import logoLight from '../../../assets/logo-light-141.svg';
import step1 from '../../../assets/icons/step-1.svg'
import step2 from '../../../assets/icons/step-2.svg'
import step3 from '../../../assets/icons/step-3.svg'

const ServiceDetails = () => {
    const serviceFeatures = [
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
        { id: 1, icon: step1, title: "STEP 1", desc: "It uses a dictionary of over 200." },
        { id: 2, icon: step2, title: "STEP 2", desc: "It uses a dictionary of over 200." },
        { id: 3, icon: step3, title: "STEP 3", desc: "It uses a dictionary of over 200." },
    ];

    const services =[
        { id: 1, title: "Engine Repair"},
        { id: 2, title: "Engine Repair"},
        { id: 3, title: "Engine Repair"},
        { id: 4, title: "Engine Repair"},
        { id: 5, title: "Engine Repair"},
        { id: 6, title: "Engine Repair"},
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
                    <img src={serviceImg} alt="Service Img" className='feature-img' />
                    <h2 className='service-title text-3xl font-semibold my-10'>Service Name</h2>
                    <p className='service-description text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

                    <div className="service-features">
                        {
                            serviceFeatures.map((feature) => <div key={feature.id} className='service-feature'>
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
                            serviceSteps.map((step) => <div key={step.id} className='servicing-step'>
                                <img src={step.icon} alt="Service Step" />
                                <h3 className='font-bold text-lg mb-5 text-center mt-4'>{step.title}</h3>
                                <p className='text-secondary-text-color text-center'>{step.desc}</p>
                            </div>)
                        }
                    </div>
                    <img src={serviceImgFeature} alt="Service Img" className='feature-img mb-8' />
                </div>

                <div className="right-section">
                    <div className="mb-5 available-services p-10">
                        <h4 className='text-xl text-black font-semibold mb-5'>Available Services</h4>
                        {
                            services.map(service=><div key={service.id} className='service'>
                                <Link to={'#'}>{service.title}<span className="icon"><BsArrowRight></BsArrowRight></span></Link>                                
                            </div>)
                        }
                    </div>

                    <div className="mb-5 download-documents bg-black p-10">
                        <h4 className='text-xl text-white'>Download</h4>
                        <div className="doc my-5 flex justify-between">
                            <div className="flex items-center">
                                <div className="icon text-3xl mr-3 text-white"><BsFiletypeDoc></BsFiletypeDoc></div>
                                <div className=''>
                                    <p className="doc-title text-lg text-white">Our Brochure</p>
                                    <p className='text-secondary-text-color text-sm'>Download</p>
                                </div>
                            </div>
                            <div className="btn download-btn text-2xl bg-primary-color"><BsFillCloudArrowDownFill></BsFillCloudArrowDownFill></div>
                        </div>
                        <div className="doc my-5 flex justify-between">
                            <div className="flex items-center">
                                <div className="icon text-3xl mr-3 text-white"><BsFiletypeDoc></BsFiletypeDoc></div>
                                <div className=''>
                                    <p className="doc-title text-lg text-white">Company Details</p>
                                    <p className='text-secondary-text-color text-sm'>Download</p>
                                </div>
                            </div>
                            <div className="btn download-btn text-2xl bg-primary-color"><BsFillCloudArrowDownFill></BsFillCloudArrowDownFill></div>
                        </div>
                    </div>

                    <div className="mb-5 promotional-section bg-black py-16">
                        <img src={logoLight} alt="logo" className='logo mb-3' />
                        <h3 className='text-white font-light'>Need Help? We Are Here To Help You</h3>

                        <div className="offer-section bg-white px-10 pt-5 pb-10 rounded-xl mt-8">
                            <h4 className='font-bold text-lg text-center mb-2'><span className='text-primary-color'>Car Doctor</span> Special</h4>
                            <p className='text-sm text-center'>Save Upto <span className='text-primary-color'>60% Off</span></p>
                        </div>
                        <Link to={'/contact'}><button className="btn quote-btn shadow-md">Get A Quote</button></Link>
                    </div>

                    <div className="mb-5 checkout">
                        <h3 className='text-3xl font-semibold mb-4'>Price: $250</h3>
                        <Link to={'/checkout'}><button className="btn checkout-btn shadow-md w-full">Proceed Checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;