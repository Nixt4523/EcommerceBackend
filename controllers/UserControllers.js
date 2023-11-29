const CryptoJS = require('crypto-js')

const User = require('../models/User')

const updatedUser = async (req, res) => {

    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.CRYPTOJS_KEY
        ).toString()
    }

    try {

        const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedUser)

    } catch (error) {
        res.status(500).json(error)
    }

}

const deleteUser = async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json("User has been Deleted..!")

    } catch (error) {
        res.status(500).json(error)
    }

}

const getUserDetails = async (req, res) => {

    try {

        const user = await User.findById(req.params.userId)
        const { password, ...otherDetails } = user._doc

        res.status(200).json(otherDetails)


    } catch (error) {
        res.status(500).json(error)
    }

}

const getAllUsersDetail = async (req, res) => {

    const query = req.query.new

    try {

        if (query) {
            const users = await User.find().sort({ _id: -1 }).limit(5)
            res.status(200).json(users)
        }
        else {
            const users = await User.find()
            res.status(200).json(users)
        }


    } catch (error) {
        res.status(500).json(error)
    }

}

const getUsersStats = async (req, res) => {

    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try {

        const data = await User.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: lastYear
                    }
                }
            },
            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    }
                }
            },
            {
                $group: {
                    _id: "$month",
                    totalUsers: {
                        $sum: 1
                    }
                }
            }
        ])

        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { updatedUser, deleteUser, getUserDetails, getAllUsersDetail, getUsersStats }