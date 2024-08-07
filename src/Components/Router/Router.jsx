import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Mainlayout/Mainlayout';
import Home from '../Home';
import About from '../About';

const MyRouter = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
            },
            {
                path:"/about",
                element:<About></About>
            }
          
           
        ]
    },
]);

export default MyRouter;