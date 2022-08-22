const Product = require('../models/Product')

module.exports = class ProductController {
    static showProducts(req,res) {
        res.render('products/all')
    }

    static createProduct(req, res){
        res.render('products/create')
    }

    static async createProductPost(req,res){
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        
        const product = new Product(name, price, description)

        await product.save()
        res.redirect("/products")
    }
}