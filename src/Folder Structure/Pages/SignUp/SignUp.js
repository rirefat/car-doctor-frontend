import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../../firebase.config';

import Navbar from '../../Shared/Navbar/Navbar';
import logiinImg from '../../../assets/images/login/login.svg';

import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';


const SignUp = () => {
    const [user, setUser] = useState({});

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user);
                console.log(user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    return (
        <div className='sign-up'>
            <Navbar></Navbar>
            <div className="sign-up-container">
                <div className="left-section">
                    <img src={logiinImg} alt="" />
                </div>
                <div className="right-section">
                    <form >
                        <h2 className='text-center text-4xl mb-5' >Sign Up</h2>
                        <label className="label">
                            <span className="label-text font-base text-base">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-100 mb-3" />

                        <label className="label">
                            <span className="label-text font-base text-base">What is your email?</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-100 mb-3" />

                        <label className="label">
                            <span className="label-text font-base text-base">Your Password</span>
                        </label>
                        <input type="password" placeholder="Name" className="input input-bordered w-full max-w-100 mb-3" />

                        <label className="label">
                            <span className="label-text font-base text-base">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-100 mb-3" />

                        <button className="btn btn-outline shadow-md w-full my-5">Sign Up</button>
                    </form>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>

                    <div className="social-sign-up my-5">
                        <Link className='link facebook' to={'/'}><ImFacebook></ImFacebook></Link>
                        <Link className='link twitter' to={'/'}><BsTwitter></BsTwitter></Link>
                        <Link className='link google' onClick={googleSignIn}><FcGoogle></FcGoogle></Link>
                    </div>
                    <p className='text-center mt-10 text-gray-500'>Already have an account? <Link className='text-primary-color' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;