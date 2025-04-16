import React, { useState } from 'react';
import { NavLink } from 'react-router';
import './navbar.css'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart, FaHeart } from "react-icons/fa";


const NavBar = () => {
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/statistic'>Statistic</NavLink>
        <NavLink to='/dashboard'>Dashboard</NavLink>
    </>
    const [color, setColor] = useState(false)
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="mr-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-36 px-6 shadow bg-[#9538E2] text-white text-sm">
                        {links}
                    </ul>
                </div>
                <a className="pl-4 md:pl-0 text-xl md:text-3xl text-[#9538E2] font-bold">Gadget Lover</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4 space-x-4 text-xl">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-1 md:gap-2 text-xl">
                <span className='border-1 border-[#9538E2] rounded-full p-2 '> <MdOutlineShoppingCart /></span>
                <span onClick={() => setColor(!color)} className='border-1 border-[#9538E2] rounded-full p-2'> {color ? <FaHeart className='text-[#9538E2]' /> : <FaRegHeart />}</span>
            </div>
        </div>

    );
};

export default NavBar;