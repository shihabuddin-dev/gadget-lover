import React from 'react';

const Footer = () => {
    return (
        <div className='mt-4 md:w-10/12 mx-auto space-y-2 p-6'>
            <h3 className='text-2xl md:text-3xl font-semibold text-center text-[#9538E2]'>Gadget Lover</h3>
            <p className='text-center text-sm md:text-base'>Leading the way in cutting-edge technology and innovation.</p>
            <hr className='border-1 border-dashed border-gray-300 mt-4 md:mt-6' />
            <footer className="footer sm:footer-horizontal text-black  md:p-8 ">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Selling</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <p className='text-center'><small>Copyright © {new Date().getFullYear()} - All right reserved by Gadget Lover</small></p>
        </div>
    );
};

export default Footer;