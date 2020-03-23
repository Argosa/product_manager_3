import React, { useState, useEffect } from 'react';
import axios from 'axios'

const ProductUpdate = (props) => {
    const [updateProduct, setUpdateProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => {
            console.log('axios',res);
            setUpdateProduct(res.data.product);
        })
        .catch(err => console.log(err))
    }, []);

    const onChangeHandler = e => {
        setUpdateProduct({
            ...updateProduct,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${props.id}`, {
            title: updateProduct.title,
            price: updateProduct.price,
            description: updateProduct.description
        })
            .then(res => {console.log('axios put', res)})
            .catch(err => console.log(err));
    }

    return(
        <div>
            <div>
                <h5>Title: {updateProduct.title}</h5>
            </div>
            <form onSubmit={onSubmitHandler}>
                <h2>Product Form</h2>
                <div>
                    <label>Title:</label>
                    <input type="text" className="form-control" name="title" value={updateProduct.title} onChange={onChangeHandler}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" className="form-control" id="price" name="price" value={updateProduct.price} onChange={onChangeHandler} required />
                </div>
                <div>
                    <label>Description</label>
                    <textarea className="form-control" id="description" name="description" value={updateProduct.description} onChange={onChangeHandler}/>
                </div>
                <input type="submit" className="btn btn-primary m-2"/>
            </form>
        </div>
    );
}

export default ProductUpdate;