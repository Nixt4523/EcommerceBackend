const router = require('express').Router()

const { verifyTokenAndAdmin } = require('../middlewares/TokenVerification')
const { createNewProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts } = require('../controllers/ProductControllers')

// CREATE PRODUCT
router.post('/', verifyTokenAndAdmin, createNewProduct)

// UPDATE PRODUCT
router.put('/:productId', verifyTokenAndAdmin, updateProduct)

// DELETE PRODUCT
router.delete('/:productId', verifyTokenAndAdmin, deleteProduct)

// GET PRODUCT
router.get('/find/:productId', getProduct)

// GET ALL PRODUCTS
router.get('/', getAllProducts)

module.exports = router
