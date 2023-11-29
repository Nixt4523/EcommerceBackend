const Order = require('../models/Order')

const createOrder = async (req, res) => {

    const newOrder = new Order(req.body)

    try {

        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)

    } catch (error) {
        res.status(500).json(error)
    }

}

const updateOrder = async (req, res) => {

    try {

        const updatedOrder = await Order.findByIdAndUpdate(req.params.orderId, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedOrder)

    } catch (error) {
        res.status(500).json(error)
    }

}

const deleteOrder = async (req, res) => {

    try {

        await Order.findByIdAndDelete(req.params.orderId)
        res.status(200).json("Order has been Deleted..!")

    } catch (error) {
        res.status(500).json(error)
    }

}

const getUserOrders = async (req, res) => {

    try {

        const userOrders = await Order.find({ userId: req.params.orderId })
        res.status(200).json(userOrders)

    } catch (error) {
        res.status(500).json(error)
    }

}

const getAllOrders = async (req, res) => {

    try {

        const orders = await Order.find()
        res.status(200).json(orders)

    } catch (error) {
        res.status(500).json(error)
    }

}

const getMonthlyIncome = async (req, res) => {

    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

    try {

        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: previousMonth
                    }
                }
            },
            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    },
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    totalIncome: {
                        $sum: "$sales"
                    }
                }
            }
        ])

        res.status(200).json(income)

    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { createOrder, updateOrder, deleteOrder, getUserOrders, getAllOrders, getMonthlyIncome }