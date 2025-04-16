import React from 'react';

const TopStaticPage = () => {
    return (
        <div className='relative text-center pt-12 pb-46'>
            <div className=' md:w-8/12 mx-auto space-y-2 md:space-y-4 text-white  '>
                <h1 className='text-2xl md:text-5xl font-semibold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='text-sm md:text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className='btn rounded-4xl'>Shop Now</button>
            </div>
            <div className='absolute top-72 left-0 right-0 mx-auto w-10/12 md:w-6/12 '>
                <img src="header-gadget.svg" alt="" />
            </div>

        </div>
    );
};

export default TopStaticPage;