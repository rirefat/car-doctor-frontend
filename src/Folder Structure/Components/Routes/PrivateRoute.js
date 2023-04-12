import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div><p className='text-center'>Loading...</p></div>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to={'/login'} state={{from : location}}></Navigate>
};

export default PrivateRoute;