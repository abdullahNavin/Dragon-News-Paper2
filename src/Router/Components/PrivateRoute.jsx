import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/Provider';
import { Navigate } from 'react-router-dom';
import Modal from './Modal';


const PrivateRoute = ({ children }) => {
    const { users } = useContext(AuthContext)

    if (users) {
      return children
    }
    else {
       return <Navigate to={'/SingUp'}></Navigate>
    }
}


export default PrivateRoute;