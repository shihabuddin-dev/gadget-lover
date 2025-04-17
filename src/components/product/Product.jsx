import React, { useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart, FaRegHeart ,FaShoppingCart} from 'react-icons/fa';


const Product = ({ product }) => {
    const { name, price, imageUrl } = product
    const [color, setColor] = useState(false)
    const [cart, setCart]=useState(false)
    
    return (
        <div className='p-2 space-y-2 border-2 rounded-xl border-gray-400'>
            <img className='w-full h-56 object-cover rounded-xl' src={imageUrl} alt="" />
            <p className='text-xl font-semibold'>{name}</p>
            <p className='text-gray-500'>Price: ${price}</p>

            <div className='flex justify-around items-center text-xl'>
                <button className='btn border-[#9538E2] text-[#9538E2] rounded-4xl hover:bg-[#9538E2] hover:text-white '>View Details</button>
                <span onClick={() => setCart(true)} className='border-1 border-[#9538E2] rounded-full p-2 '>  {cart?<FaShoppingCart />:<MdOutlineShoppingCart />} </span>
                <span onClick={() => setColor(!color)} className='border-1 border-[#9538E2] rounded-full p-2'> {color ? <FaHeart className='text-[#9538E2]' /> : <FaRegHeart />}</span>
            </div>
        </div>
    );
};

export default Product;