const router = require('express').Router()

const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/TokenVerification')
const { updatedUser,
    deleteUser,
    getUserDetails,
    getAllUsersDetail,
    getUsersStats } = require('../controllers/UserControllers')

// UPDATE USER
router.put('/:userId', verifyTokenAndAuthorization, updatedUser)

// DELETE USER
router.delete('/:userId', verifyTokenAndAuthorization, deleteUser)

// GET USER DETAILS
router.get('/find/:userId', verifyTokenAndAdmin, getUserDetails)

// GET ALL USERS
router.get('/', verifyTokenAndAdmin, getAllUsersDetail)

// GET USER STATS
router.get('/stats', verifyTokenAndAdmin, getUsersStats)

module.exports = router
