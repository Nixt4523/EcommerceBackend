const Cart = require('../models/Cart')

const createCart = async (req, res) => {

    const newCart = new Cart(req.body)

    try {

        const savedCart = await newCart.save()
        res.status(200).json(savedCart)

    } catch (error) {
        res.status(500).json(error)
    }

}

const updateCart = async (req, res) => {

    try {

        const updatedCart = await Cart.findByIdAndUpdate(req.params.cartId, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedCart)

    } catch (error) {
        res.status(500).json(error)
    }

}

const deleteCart = async (req, res) => {

    try {

        await Cart.findByIdAndDelete(req.params.cartId)
        res.status(200).json("Cart has been Deleted..!")

    } catch (error) {
        res.status(500).json(error)
    }

}

const getUserCart = async (req, res) => {

    try {

        const userCart = await Cart.findOne({ userId: req.params.userId })
        res.status(200).json(userCart)

    } catch (error) {
        res.status(500).json(error)
    }

}

const getAllUsersCart = async (req, res) => {

    try {

        const carts = await Cart.find()
        res.status(200).json(carts)

    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { createCart, updateCart, deleteCart, getUserCart, getAllUsersCart }