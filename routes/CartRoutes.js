const router = require('express').Router()

const { verifyTokenAndAdmin,
    verifyToken,
    verifyTokenAndAuthorization } = require('../middlewares/TokenVerification')
const { createCart,
    updateCart,
    deleteCart,
    getUserCart,
    getAllUsersCart } = require('../controllers/CartControllers')

// CREATE CART
router.post('/', verifyToken, createCart)

// UPDATE CART
router.put('/:cartId', verifyTokenAndAuthorization, updateCart)

// DELETE CART
router.delete('/:cartId', verifyTokenAndAuthorization, deleteCart)

// GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart)

// GET ALL CARTS
router.get('/', verifyTokenAndAdmin, getAllUsersCart)

module.exports = router
