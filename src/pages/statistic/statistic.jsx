import React, { use } from 'react';
import StatisticTop from '../../components/statisticTop/StatisticTop';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistic = ({ productPromise }) => {
    const productsData = use(productPromise)
    const products = productsData.data.products
    const singleProducts = products.map(product => {
        const productData = {
            name: product.name,
            id: product.id,
            rating: product.rating,
            stock: product.stock
        }
        return productData
    })
    return (
        <div className='mt-4'>
            <StatisticTop></StatisticTop>
            <div className='mx-auto w-10/12 mt-6'>
                <BarChart width={1000} height={400} data={singleProducts}>
                    <XAxis dataKey='id' tick='id'></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                    <Bar dataKey='stock' fill="#9538E2"></Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Statistic;