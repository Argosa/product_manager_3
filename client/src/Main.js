import React from 'react';
import {Router} from '@reach/router';
import ProductFormList from './components/ProductFormList';
import ProductDetail from './components/ProductDetail';
import ProductUpdate from './components/ProductUpdate';

const Main = () => {

    return(
        <div>
            Main Placeholder
            <Router>
                <ProductFormList path="/" />
                <ProductUpdate path="/product/update/:id"/>
                <ProductDetail path="/product/:id"/>
            </Router>
        </div>
    )
}

export default Main;