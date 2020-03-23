const { Product } = require('../models/product.model');

module.exports.findAllProducts = (request, response) => {
    Product.find()
        .then((allProducts) => response.json({ products: allProducts }))
        .catch(err => response.json(err));
}

module.exports.findOneProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(oneSingleProduct => response.json({product: oneSingleProduct}))
        .catch(err => response.json({message: "Something is wrong!", error:err}));
}

module.exports.createProduct = (request, response) => {
    const { title, price, description }  = request.body;
    Product.create({
        title: title,
        price: price,
        description: description
    })
    .then(product => {
        console.log(product)
        response.json(product)
    })
    .catch(err => response.json(err));
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedPerson => request.json(updatedPerson))
    .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Product.deleteOne({_id: request.params.id})
    .then(result => response.json({ result: result}))
    .catch(err => response.json({ message: "Something is Wrong!", error: err}));
}
