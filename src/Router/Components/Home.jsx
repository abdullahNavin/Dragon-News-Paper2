import React from 'react';
import Header from './Header';
import Braking from './Braking';
import NavBar from './NavBar';
import CategoryS from './CategoryS';
import NewsS from './NewsS';
import LoginS from './LoginS';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Braking></Braking>
            <NavBar></NavBar>
            <div className='grid grid-cols-4 gap-3'>
                <div className='border border-green-400'>
                    <CategoryS></CategoryS>
                </div>
                <div className='border border-green-400 col-span-2'>
                    <NewsS></NewsS>
                </div>
                <div className='border border-green-400'>
                    <LoginS></LoginS>
                </div>
            </div>
        </div>
    );
};

export default Home;