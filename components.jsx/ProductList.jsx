//Task 3: Create the ProductList Component

import React from 'react';
import ProductItem from './ProductItem'


function ProductList({ products }) {
    return (
        <ul>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ul>
    );
}

export default ProductList;