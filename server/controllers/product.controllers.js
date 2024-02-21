const Product = require("../models/product.models.js");

module.exports.createProduct = (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err))
    }
module.exports.getAll = (req, res) => {
        Product.find()
            .then((oneproduct) => res.json(oneproduct))
            .catch((err) => console.log(err))
    }