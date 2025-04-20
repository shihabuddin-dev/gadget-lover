import React, { use, useState } from 'react';
import TopStaticPage from '../../components/topStaticPage/TopStaticPage';
import Product from '../../components/product/Product';

const Home = ({ productPromise }) => {
    const productsData = use(productPromise)
    const data = productsData.data.products
    const [products, setProduct] = useState(data)
    const [searchText, setSearchText] = useState('')
    const [message, setMessage] = useState(false)
    const handleSearch = (e, text) => {
        e.preventDefault()
        if (text === '') return setProduct(data)
        const searchProducts = data.filter(product =>
            product.name.toLowerCase().includes(text.toLowerCase()) || product.brand.toLowerCase().includes(text.toLowerCase()))
        if (searchProducts.length == 0) setMessage(!message)
        setProduct(searchProducts)

    }
    return (
        <div className='mt-4 '>
            <TopStaticPage></TopStaticPage>
            <h2 className='text-xl md:text-4xl font-semibold text-center mt-4 md:mt-46'>Explore Cutting-Edge Gadgets</h2>

            <form
                onSubmit={(e) => handleSearch(e, searchText)}
                className='flex gap-4 flex-col md:flex-row justify-center items-center mt-6'>

                <input
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder='Search by name or brand name'
                    type="text" name="email" className='border w-1/3 px-4 py-1.5 border-[#9538E2] rounded-4xl  focus:outline-none focus:shadow-outline' />
                <button type='submit' className='btn border-[#9538E2] text-[#9538E2] rounded-4xl hover:bg-[#9538E2] hover:text-white '>Search</button>
            </form>
            <p>{message ? 'Not Found' : ''}</p>
            <div className='mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-4'>

                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;