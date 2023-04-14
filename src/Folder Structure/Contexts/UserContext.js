import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase.config';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const adminMail = "rirefat24@gmail.com";

    const createUserByEmail = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const googleReg = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => subscribe();
    }, []);


    const AuthInfo = { user, adminMail, loading, createUserByEmail, googleReg, login, logOut }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
