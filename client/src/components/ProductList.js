import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const ProductList = () => {
    const [ productList, setProductList ] = useState([]);

    useEffect(() => {
        axios.get ("http://localhost:8000/api")
        .then(res => {
            console.log(res);
            setProductList(res.data.products)
        })
        .catch(err => console.log(err))
    }, []);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(res => {
                console.log('delete', res);
                const filterList = productList.filter(product => product._id != id);
                setProductList(filterList)
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description:</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, i) => (
                       <tr key={i}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td><Link to={`/product/${product._id}`}>Detail</Link> <Link to={`/product/update/${product._id}`}>Update</Link> <button type="button" onClick={() => deleteProduct(product._id)}>Delete</button></td>
                       </tr> 
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;