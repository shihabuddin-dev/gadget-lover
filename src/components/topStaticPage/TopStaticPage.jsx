import React from 'react';

const TopStaticPage = () => {
    return (
        <div className='relative text-center pt-8 md:pt-16 pb-50 md:pb-52 bg-[#9538E2] rounded-lg px-2'>
            <div className=' md:w-8/12 mx-auto space-y-2 md:space-y-4 text-white  '>
                <h1 className='text-2xl md:text-5xl font-semibold md:leading-16'>Explore Expert Reviews & News on the Latest Tech Innovations</h1>
                <p className='text-sm md:text-base'>Plug into the gadget world! Explore cutting-edge tech through expert reviews, breaking news, and curated lists. Your go-to source for the latest electronic innovations and must-have gear.</p>
                <button className='btn rounded-4xl'>Shop Now</button>
            </div>
            <div className='absolute top-78 md:top-84 left-0 right-0 mx-auto w-10/12 md:w-6/12 '>
                <img src="header-gadget.svg" alt="" />
            </div>
        </div>
    );
};

export default TopStaticPage;