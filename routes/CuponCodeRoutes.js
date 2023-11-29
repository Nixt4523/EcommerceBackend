const router = require('express').Router()

const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require('../middlewares/TokenVerification')

const { getAllCuponCodes, addCuponCode, deleteCuponCode, validateCuponCode } = require('../controllers/CuponCodeControllers')

// GET ALL CUPON CODES
router.get('/', verifyTokenAndAdmin, getAllCuponCodes)

// ADD CUPON CODE
router.post('/', verifyTokenAndAdmin, addCuponCode)

// DELETE CUPON CODE
router.delete('/', verifyTokenAndAdmin, deleteCuponCode)

// VALIDATE CUPON CODE
router.post('/validate', verifyTokenAndAuthorization, validateCuponCode)

module.exports = router