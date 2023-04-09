import React, { useState } from 'react';
import './SocialSignUp.css';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../../firebase.config';

import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';

const SocialSignUp = () => {
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
        <div className="social-sign-up my-5">
            <Link className='link facebook' to={'/'}><ImFacebook></ImFacebook></Link>
            <Link className='link twitter' to={'/'}><BsTwitter></BsTwitter></Link>
            <Link className='link google' onClick={googleSignIn}><FcGoogle></FcGoogle></Link>
        </div>
    );
};

export default SocialSignUp;