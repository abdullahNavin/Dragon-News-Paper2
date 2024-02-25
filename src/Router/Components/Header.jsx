import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex items-center flex-col space-y-4 my-8'>
            <img src={logo} alt="" />
            <h1 className='text-2xl text-gray-400'> Journalism Without Fear or Favour</h1>
            <h1 className="text-2xl">{moment().format('dddd,MMMM D Y')}</h1>
        </div>
    );
};

export default Header;