import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import logiinImg from '../../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import './login.css';

import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { GrLinkedinOption } from 'react-icons/gr';

const Login = () => {
    return (
        <div className='login'>
            <Navbar></Navbar>
            <div className="login-container">
                <div className="left-section">
                    <img src={logiinImg} alt="" />
                </div>
                <div className="right-section">
                    <form >
                        <h2 className='text-center text-4xl mb-5' >Login</h2>
                        
                        <label className="label">
                            <span className="label-text font-base text-base">What is your email?</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-100 mb-3" />

                        <label className="label">
                            <span className="label-text font-base text-base">Your Password</span>
                        </label>
                        <input type="password" placeholder="Name" className="input input-bordered w-full max-w-100 mb-3" />
                        
                        <button className="btn btn-outline shadow-md w-full my-5">Login</button>
                    </form>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>

                    <div className="social-login my-5">
                        <Link className='link facebook' to={'/'}><ImFacebook></ImFacebook></Link>
                        <Link className='link linkedin' to={'/'}><GrLinkedinOption></GrLinkedinOption></Link>
                        <Link className='link google' to={'/'}><FcGoogle></FcGoogle></Link>
                    </div>
                    <p className='text-center mt-10 text-gray-500'>Have an account? <Link className='text-primary-color' to={'/sign-up'}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;