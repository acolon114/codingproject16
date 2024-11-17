//Task 4: Create the ProductItem Component

import  React from 'react';

//Displays Products price, name, and description
function ProductItem ({ product }) {
    return (
        <li>
            {product.name} - ${product.price}
            <p>{product.description}</p>
        </li>
    );
}
export default ProductItem;