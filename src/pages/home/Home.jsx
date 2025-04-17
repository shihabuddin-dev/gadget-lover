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
            <div className='mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;