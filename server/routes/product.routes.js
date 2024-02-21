const ProductConroller = require("../controllers/product.controllers");

module.exports = (app) => {
    app.get("/api/products" , ProductConroller.getAll)
    app.post("/api/products", ProductConroller.createProduct)
}