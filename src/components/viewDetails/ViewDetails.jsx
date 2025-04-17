import React, { use } from 'react';
import { useParams } from 'react-router';
import SingleProduct from './SingleProduct';

const ViewDetails = ({ productPromise }) => {
    const { productId } = useParams()
    const productsData = use(productPromise)
    const allProducts = productsData.data.products
    const filterProduct = allProducts.filter(product => product.id === productId)


    return (
        <div>
            {
                filterProduct.map(oneProduct => <SingleProduct key={oneProduct.id} oneProduct={oneProduct}></SingleProduct>)
            }

        </div>
    );
};

export default ViewDetails;