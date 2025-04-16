import React from 'react';

const Product = ({ product }) => {
    const { name, price, imageUrl } = product
    return (
        <div className='p-2 space-y-2 border-2 rounded-xl border-gray-400'>
            <img className='w-full h-56 object-cover rounded-xl' src={imageUrl} alt="" />
            <p className='text-xl font-semibold'>{name}</p>
            <p className='text-gray-500'>Price: ${price}</p>
            <button className='btn '>View Details</button>
        </div>
    );
};

export default Product;