

import { Outlet, Link } from "react-router-dom"

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'


function Main() {

    return (
        <>
            <Navbar />
            <Outlet />
        </>



    );
}

export default Main;
