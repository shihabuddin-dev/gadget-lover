import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div className='container mx-auto px-2 py-2'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;