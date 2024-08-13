import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Mainlayout/Mainlayout';
import Home from '../Home';
import About from '../About';
import Masonry from '../Masonry';
import Services from '../Services';
import Work from '../Work';
import Contact from '../Contact';

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
            },
            {
                path:"/service",
                element:<Services></Services>
            },
            {
                path:"/work",
                element:<Work></Work>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/protfolio",
                element:<Masonry></Masonry>
            }
        ]
    },
]);

export default MyRouter;