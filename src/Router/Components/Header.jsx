import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <img className='' src={logo} alt="" />
            </div>
            <div>
                <h1 className='text-2xl text-gray-400'>Journalism Without Fear or Favour</h1>
            </div>
            <h1>{moment().format("dddd, MMMM D, YYYY")}</h1>
        </div>
    );
};

export default Header;