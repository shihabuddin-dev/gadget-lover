import React, { use } from 'react';
import TopStaticPage from '../../components/topStaticPage/TopStaticPage';
import Product from '../../components/product/Product';

const Home = ({ productPromise }) => {
    const productsData = use(productPromise)
    const products = productsData.data.products
    return (
        <div className='mt-4 '>
            <TopStaticPage></TopStaticPage>
            <h2 className='text-xl md:text-4xl font-semibold text-center mt-4 md:mt-46'>Explore Cutting-Edge Gadgets</h2>
            <section className='flex flex-col md:flex-row gap-6 mt-6'>
                <div className='md:w-[20%]'>
                    <div className='grid gap-2'>
                        <button className='btn'>Products</button>
                        <button className='btn'>Products</button>
                        <button className='btn'>Products</button>
                        <button className='btn'>Products</button>
                    </div>
                </div>
                <div className='md:w-[80%] grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;