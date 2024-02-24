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
            <div>
                <div>
                    <CategoryS></CategoryS>
                </div>
                <div>
                    <NewsS></NewsS>
                </div>
                <div>
                    <LoginS></LoginS>
                </div>
            </div>
        </div>
    );
};

export default Home;