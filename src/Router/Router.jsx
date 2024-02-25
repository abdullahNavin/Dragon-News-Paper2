import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import About from './About';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/About',
                element:<About></About>
            }
        ]
    }
])

export default router;