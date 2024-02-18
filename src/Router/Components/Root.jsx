import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <h1 className='text-4xl font-black text-red-700'>header</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;