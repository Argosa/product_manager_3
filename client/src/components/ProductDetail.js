import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ProductDetail = (props) => {
    const [currentProduct, setCurrentProduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => {
            console.log('axios',res);
            setCurrentProduct(res.data.product);
        })
        .catch(err => console.log(err))
    }, []);

    return(
        <div>
            <h5>Title: {currentProduct.title}</h5>
            <h5>Price: {currentProduct.price}</h5>
            <h5>Description: {currentProduct.description}</h5>
        </div>
    )
}

export default ProductDetail;