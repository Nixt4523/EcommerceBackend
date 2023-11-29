const CryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
const User = require('../models/User')


const registerUser = async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.CRYPTOJS_KEY)
    })

    try {

        const savedUser = await newUser.save()
        const { password, ...otherDetails } = savedUser

        res.status(201).json(otherDetails)
    }
    catch (error) {
        res.status(500).json(error)
    }

}

const loginUser = async (req, res) => {

    try {

        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            res.status(404).json("User not found..!")
        }
        else {

            const userPassword = CryptoJs.AES.decrypt(user.password, process.env.CRYPTOJS_KEY).toString(CryptoJs.enc.Utf8)

            if (userPassword !== req.body.password) {
                res.status(401).json("Wrong Password")
            }
            else {

                const accessToken = jwt.sign(
                    {
                        id: user._id,
                        isAdmin: user.isAdmin
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "3d"
                    }
                )

                const { password, ...otherDetails } = user._doc

                res.status(200).json({ ...otherDetails, accessToken })
            }

        }
    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { registerUser, loginUser }