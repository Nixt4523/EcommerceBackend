const Product = require('../models/Product')

const createNewProduct = async (req, res) => {

    const newProduct = new Product(req.body)

    try {

        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)

    } catch (error) {
        res.status(500).json(error)
    }
}

const updateProduct = async (req, res) => {

    try {

        const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json(error)
    }

}

const deleteProduct = async (req, res) => {

    try {

        await Product.findByIdAndDelete(req.params.productId)
        res.status(200).json("Product has been Deleted..!")

    } catch (error) {
        res.status(500).json(error)
    }

}

const getProduct = async (req, res) => {

    try {

        const product = await Product.findById(req.params.productId)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json(error)
    }

}

const getAllProducts = async (req, res) => {

    const queryNew = req.query.new
    const qCategory = req.query.category

    try {

        let products = []

        if (queryNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        }
        else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                }
            })
        }
        else {
            products = await Product.find()
        }

        res.status(200).json(products)

    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { createNewProduct, updateProduct, deleteProduct, getProduct, getAllProducts }