import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { auth } from '../../Firebase/firebase.config';

export const AuthContext = createContext(null)

const Provider = ({ children }) => {

    const [users, setUsers] = useState(null)
    const [loding, setLoding] = useState(true)
    // console.log(users);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser)
            setLoding(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const info = { users, loding ,setLoding}

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;