import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import logiinImg from '../../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import './login.css';

import SocialSignUp from '../../Shared/SocialSignUp/SocialSignUp';
import app from '../../../firebase.config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const auth = getAuth(app);

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("log in successfully!");
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Wrong Credentials");
                event.target.reset();
            });
    }

    return (
        <div className='login'>
            <Navbar></Navbar>
            <div className="login-container">
                <div className="left-section">
                    <img src={logiinImg} alt="" />
                </div>
                <div className="right-section">
                    <form onSubmit={handleLogin}>
                        <h2 className='text-center text-4xl mb-5' >Login</h2>

                        <label className="label">
                            <span className="label-text font-base text-base">What is your email?</span>
                        </label>
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-100 mb-3" />

                        <label className="label">
                            <span className="label-text font-base text-base">Your Password</span>
                        </label>
                        <input name='password' type="password" placeholder="Password" className="input input-bordered w-full max-w-100 mb-3" />

                        <button className="btn btn-outline shadow-md w-full my-5">Login</button>
                    </form>
                    <p className='my-2 text-gray-500'>Forget Your Password? <Link className='text-primary-color hover:font-bold' >Reset</Link></p>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                    </div>

                    <SocialSignUp></SocialSignUp>
                    <p className='text-center mt-10 text-gray-500'>Have an account? <Link className='text-primary-color hover:font-bold' to={'/sign-up'}>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;