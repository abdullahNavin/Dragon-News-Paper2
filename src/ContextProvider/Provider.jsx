import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { auth } from '../../Firebase/firebase.config';

export const AuthContext = createContext(null)

const Provider = ({ children }) => {

    const [users, setUsers] = useState(null)
    // console.log(users);

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setUsers(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const info = {users}

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;