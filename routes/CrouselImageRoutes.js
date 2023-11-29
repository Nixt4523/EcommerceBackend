const router = require('express').Router()

const { addCrouselImage, updateCrouselImage, deleteCrouselImage, getCrouselImages } = require('../controllers/CrouselImageControllers')
const { verifyTokenAndAdmin } = require('../middlewares/TokenVerification')

// ADD CROUSEL IMAGE
router.post('/', verifyTokenAndAdmin, addCrouselImage)

// UPDATE CROUSEL IMAGE
router.put('/:crouselImageId', verifyTokenAndAdmin, updateCrouselImage)

// DELETE CROUSEL IMAGE
router.delete('/:crouselImageId', verifyTokenAndAdmin, deleteCrouselImage)

// GET CROUSEL IMAGES
router.get('/', getCrouselImages)

module.exports = router
