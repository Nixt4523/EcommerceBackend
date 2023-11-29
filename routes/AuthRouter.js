const router = require('express').Router()

const { registerUser, loginUser } = require('../controllers/AuthControllers')

// REGISTER USER
router.post('/register', registerUser)

// LOGIN USER
router.post('/login', loginUser)

module.exports = router
