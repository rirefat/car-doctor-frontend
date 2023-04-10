import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import Navbar from '../../Shared/Navbar/Navbar';
import logiinImg from '../../../assets/images/login/login.svg';

import SocialSignUp from '../../Shared/SocialSignUp/SocialSignUp';
import app from '../../../firebase.config';


const SignUp = () => {
    const [user, setUser] = useState({});
    const [userName, setUserName] = useState('');
    const auth = getAuth(app);

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.pass.value;
        const confirmPass = event.target.confirmPass.value;

        if (pass === confirmPass) {
            createUserWithEmailAndPassword(auth, email, pass)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user);
                    updateUserInfo();
                    sendVerificationMail();
                    alert("Please check your email and confirm your password.")
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
        else {
            alert("Provide correct password.")
            event.target.pass.value = "";
            event.target.confirmPass.value = "";
        }
    }

    const getUserName = (event) => {
        const userName = event.target.value;
        setUserName(userName);
    }

    const updateUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: userName
        })
            .then(() => { })
            .catch((error) => {
                console.log(error)
            });
    }

    const sendVerificationMail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                
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

                    <form onSubmit={handleRegister}>
                        <h2 className='text-center text-4xl mb-5' >Sign Up</h2>
                        <label className="label">
                            <span className="label-text font-base text-base">What is your name?</span>
                        </label>
                        <input name='name' type="text" onBlur={getUserName} placeholder="Name" className="input input-bordered w-full max-w-100 mb-3" />

                        <label className="label">
                            <span className="label-text font-base text-base">What is your email?</span>
                        </label>
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-100 mb-3" />

                        <label className="label">
                            <span className="label-text font-base text-base">Your Password</span>
                        </label>
                        <input name='pass' type="password" placeholder="Password" className="input input-bordered w-full max-w-100 mb-3" />

                        <label className="label">
                            <span className="label-text font-base text-base">Confirm Password</span>
                        </label>
                        <input name='confirmPass' type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-100 mb-3" />

                        <button className="btn btn-outline shadow-md w-full my-5">Sign Up</button>
                    </form>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>
                    <SocialSignUp></SocialSignUp>
                    <p className='text-center mt-10 text-gray-500'>Already have an account? <Link className='text-primary-color hover:font-bold' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;