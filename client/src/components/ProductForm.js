import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const ProductForm = (props) => {
    const [form, setForm] = useState({
        title: "",
        price: "",
        description: ""
    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new", {
            title: form.title,
            price: form.price,
            description: form.description
        })
            .then(res => {
                console.log(res)
                setForm({
                    title: "",
                    price: "",
                    description: "",
                    submitted: true
                })
                navigate('/')
            })
            .catch(err => console.log(err));
    };

    return(
        <div>
            <div>
                {form.submitted}
                {form.title.length > 0 && form.title.length <4 && <h5 className="alert alert-danger">Title must be 4 characters or more</h5>}
                {form.description.length > 0 && form.description.length < 10 && <h5 className="alert alert-danger">Description must be 10 characters or more!</h5>}
            </div>
            <form onSubmit={onSubmitHandler}>
                <h2>Product Form</h2>
                <div>
                    <label>Title:</label>
                    <input type="text" className="form-control" id="title" name="title" value={form.title}onChange={onChangeHandler}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" className="form-control" id="price" name="price" value={form.price}required onChange={onChangeHandler}/>
                </div>
                <div>
                    <label>Description</label>
                    <textarea className="form-control" id="description" name="description" value={form.description} onChange={onChangeHandler}/>
                </div>
                <input type="submit" className="btn btn-primary m-2"/>
            </form>
        </div>
    );
}

export default ProductForm;