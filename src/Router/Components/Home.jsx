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
            <div className='grid grid-cols-4 gap-3 z-0'>
                <div>
                    <CategoryS></CategoryS>
                </div>
                <div className='col-span-2'>
                    <NewsS></NewsS>
                </div>
                <div >
                    <LoginS></LoginS>
                </div>
            </div>
        </div>
    );
};

export default Home;