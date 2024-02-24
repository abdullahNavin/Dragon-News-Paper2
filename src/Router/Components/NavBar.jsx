import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <ul className='flex gap-4 justify-center'>
                <Link to={'/'}>Home</Link>
                <Link to={'/About'}>About</Link>
                <Link to={'/'}>About</Link>
            </ul>
        </div>
    );
};

export default NavBar;