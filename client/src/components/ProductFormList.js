import React from 'react';
import ProductForm from './ProductForm'
import ProductList from './ProductList'

const ProductFormList = () => {

    return(
        <div>
            <ProductForm />
            <hr></hr>
            <ProductList />
        </div>
    )
}

export default ProductFormList;