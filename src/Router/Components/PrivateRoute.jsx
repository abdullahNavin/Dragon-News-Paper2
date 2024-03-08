import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import Modal from './Modal';


const PrivateRoute = ({ children }) => {
    const { users, loding } = useContext(AuthContext)

    const location = useLocation()
    // console.log(location);

    if (loding) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <span className="loading w-12 loading-spinner text-info"></span>
            </div>
        )
    }
    else if (users) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to={'/SingUp'}></Navigate>
    }
}


export default PrivateRoute;