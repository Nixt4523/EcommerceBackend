const router = require('express').Router()

const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('../middlewares/TokenVerification')
const { createOrder, updateOrder, deleteOrder, getUserOrders, getAllOrders, getMonthlyIncome } = require('../controllers/OrderControllers')

// CREATE ORDER
router.post('/', verifyToken, createOrder)

// UPDATE ORDER
router.put('/:orderId', verifyTokenAndAuthorization, updateOrder)

// DELETE CART
router.delete('/:orderId', verifyTokenAndAdmin, deleteOrder)

// GET USER ORDERS
router.get('/find/:userId', verifyTokenAndAuthorization, getUserOrders)

// GET ALL ORDERS
router.get('/', verifyTokenAndAdmin, getAllOrders)

// GET MONTHLY INCOME
router.get('/income', verifyTokenAndAdmin, getMonthlyIncome)

module.exports = router

