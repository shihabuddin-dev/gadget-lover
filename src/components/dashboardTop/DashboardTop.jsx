import React from 'react';

const DashboardTop = () => {
    return (
        <div className='text-center py-8 bg-[#9538E2] rounded-lg'>
            <div className=' md:w-8/12 mx-auto space-y-2 md:space-y-4 text-white  px-2'>
                <h2 className='text-2xl md:text-4xl font-semibold'>Dashboard</h2>
                <p className='text-sm md:text-base'>A products dashboard visually centralizes key metrics like sales, inventory levels, performance trends, and customer feedback. It enables quick analysis and informed decision-making for optimizing your product strategy.
                </p>
                <div className='flex gap-2 justify-center items-center'>
                    <button className='btn rounded-4xl text-[#9538E2]'>Cart</button>
                    <button className='btn rounded-4xl border-2 text-white bg-transparent'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardTop;