import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router';


const Product = ({ product }) => {
    const { id, name, price, imageUrl } = product
    const [color, setColor] = useState(false)

    return (
        <div className='p-2 space-y-2 border-2 rounded-xl border-gray-400'>
            <img className='w-full h-56 object-cover rounded-xl' src={imageUrl} alt="" />
            <p className='text-xl font-semibold'>{name}</p>
            <p className='text-gray-500'>Price: ${price}</p>

            <div className='flex gap-4 items-center text-xl'>
                <Link to={`/view-details/${id}`}>
                    <button className='btn border-[#9538E2] text-[#9538E2] rounded-4xl hover:bg-[#9538E2] hover:text-white '>View Details</button>
                </Link>

                <span onClick={() => setColor(!color)} className='border-1 border-[#9538E2] rounded-full p-2'> {color ? <FaHeart className='text-[#9538E2]' /> : <FaRegHeart />}</span>
            </div>
        </div>
    );
};

export default Product;