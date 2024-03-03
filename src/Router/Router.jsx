import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import About from './About';
import FullNews from './Components/FullNews';
import SingUp from './Components/SingUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/About',
                element: <About></About>
            },
            {
                path: '/FullNews/:id',
                element: <FullNews></FullNews>,
                loader: () => fetch('/news.json')
            },
            {
                path:'/SingUp',
                element:<SingUp></SingUp>
            }
        ]
    }
])

export default router;