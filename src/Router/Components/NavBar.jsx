import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from './Modal';
import { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/Provider';
import { signOut } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase.config';

const NavBar = () => {
    const { users } = useContext(AuthContext)
    const handleSignOut = () => {
        signOut(auth)
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='my-7 grid grid-cols-3 justify-end sticky top-0 z-30 bg-gray-300 py-2 px-1 rounded-md'>
            <ul className='flex gap-4 justify-center items-center col-span-2 text-gray-600 font-semibold text-xl'>
                <NavLink className={'ml-[25.75rem]'} to={'/'}>Home</NavLink>
                <NavLink to={'/About'}>About</NavLink>
                <NavLink to={'/Career'}>Career</NavLink>
            </ul>
            <div className='flex justify-end'>
                {
                    users ?
                        <button
                            onClick={handleSignOut}
                            className='text-2xl font-semibold bg-[#403f3f] py-2 px-5 text-white rounded'>
                            Sign Out
                        </button>
                        :
                        <button
                            onClick={() => document.getElementById('my_modal_2').showModal()}
                            className='text-2xl font-semibold bg-[#403f3f] py-2 px-5 text-white rounded'>
                            Login
                        </button>
                }
                <Modal></Modal>
            </div>
        </div>
    );
};

export default NavBar;