import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BsCartCheck } from "react-icons/bs";



const SingleProduct = ({ oneProduct }) => {
    const { id, imageUrl, name, price, stock, category, brand, description, features, rating } = oneProduct;
    const navigate = useNavigate()
    const [color, setColor] = useState(false)
    const [cart, setCart] = useState(false)
    const stars = <>
        <IoIosStar /><IoIosStar /><IoIosStarHalf /><IoIosStarOutline />
    </>
    return (
        <div className='mt-4'>
            <div className='relative text-center pt-6 md:pt-12 pb-50 md:pb-56 bg-[#9538E2] rounded-lg'>
                <div className=' md:w-8/12 mx-auto space-y-2 md:space-y-4 text-white  '>
                    <h2 className='text-2xl md:text-4xl font-semibold'>Product Detail</h2>
                    <p className='text-sm md:text-base'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! This Product Unique id Number: {id}
                    </p>
                    <button onClick={() => navigate(-1)} className='btn rounded-4xl'>Back</button>
                </div>
                <div className='absolute bg-white top-42 md:top-56 left-0 right-0 mx-auto w-10/12 flex flex-col md:flex-row items-center gap-4 p-2 md:p-6 rounded-xl'>
                    <div className='bg-[#ECECEC] p-4 rounded-xl'>
                        <img className='h-54 md:w-74 mx-auto object-cover' src={imageUrl} alt="" />
                    </div>
                    <div className='text-justify space-y-1.5'>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <p className='font-semibold'>Price: ${price}</p>
                        <button className='btn btn-sm border-[#9538E2] text-[#9538E2] rounded-4xl hover:bg-[#9538E2] hover:text-white '>Stock: {stock}</button>
                        <p>{description}</p>
                        <div className='flex gap-4 font-semibold'><span><span>Category: {category}</span></span> Brand:{brand}</div>
                        <p className='font-bold flex gap-2 items-center'>Features <FaAngleDown /></p>
                        <div>
                            {
                                features.map((feature, i) => <ol key={i} className='list-disc pl-4 text-gray-700 space-y-0'>
                                    <li><small>{feature}</small></li>
                                </ol>)
                            }
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='font-bold flex gap-2 items-center'>Ratings</p>
                            <span className='text-xl text-amber-500 flex'>{stars} </span>
                            <span>{rating}</span>
                        </div>
                        <div className='text-xl flex gap-4 items-center'>
                            <button onClick={() => setCart(true)} className='btn bg-[#9538E2] text-white '>
                                {cart ? 'Added' : 'Add to Cart'}

                                {cart ? <BsCartCheck className='text-xl' /> : <MdAddShoppingCart className='text-xl' />}

                            </button>
                            <button onClick={() => setColor(!color)} className='border-1 border-[#9538E2] rounded-full p-2'> {color ? <FaHeart className='text-[#9538E2]' /> : <FaRegHeart />}</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;