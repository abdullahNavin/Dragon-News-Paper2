import React from 'react';
import {NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='my-7 grid grid-cols-3 justify-end'>
            <ul className='flex gap-4 justify-center items-center col-span-2 text-gray-400 font-semibold text-xl'>
                <NavLink className={'ml-[25.75rem]'} to={'/'}>Home</NavLink>
                <NavLink to={'/About'}>About</NavLink>
                <NavLink to={'/Career'}>Career</NavLink>
            </ul>
            <div className='flex justify-end'>
                <button className='text-2xl font-semibold bg-[#403f3f] py-2 px-5 text-white'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;