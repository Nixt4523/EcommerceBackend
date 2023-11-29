const router = require('express').Router()

const { verifyTokenAndAdmin } = require('../middlewares/TokenVerification')
const { addSale, deleteSale, updateSale, getSale } = require('../controllers/SaleControllers')

// ADD SALE
router.post('/', verifyTokenAndAdmin, addSale)

// UPDATE SALE 
router.put('/:saleId', verifyTokenAndAdmin, updateSale)

// DELETE SAEL 
router.delete('/:saleId', verifyTokenAndAdmin, deleteSale)

// GET SALE 
router.get('/', getSale)

module.exports = router