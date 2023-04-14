import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user, adminMail, loading} = useContext(AuthContext);
    // const adminMail = "rirefat24@gmail.com";
    console.log(user)

    if(loading){
        return <div><p className='text-center'>Loading...</p></div>
    }
    
    if(adminMail===user?.email && user.uid){
        return children
    }

    return <Navigate to={'/login'}></Navigate>
};

export default AdminRoute;