//Task 3: Create the ProductList Component

import React from 'react';
import ProductItem from './ProductItem'

// Creates list of products in order
function ProductList({ products }) {
    return (
        //Task 5: Implement Keys in the ProductList Component
        <ol>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ol>
    );
}

export default ProductList;