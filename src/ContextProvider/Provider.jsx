import React, { createContext } from 'react';
import { useState } from 'react';


export const AuthContext = createContext(null)
const Provider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const info = {
        users,
    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;