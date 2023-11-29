const CuponCodes = require('../models/CuponCodes')

const addCuponCode = async (req, res) => {

    try {

        const newCuponCode = new CuponCodes(req.body)
        const savedCuponCode = await newCuponCode.save()

        res.status(200).json(savedCuponCode)

    } catch (error) {
        res.status(500).json(error)
    }

}

const deleteCuponCode = async (req, res) => {

    try {

        await CuponCodes.findOneAndDelete({ cuponCode: req.body.cuponcode })

        res.status(200).json('Cupon Code has been Deleted..!')

    } catch (error) {
        res.status(500).json(error)
    }

}

const validateCuponCode = async (req, res) => {

    try {
        const cuponCode = await CuponCodes.findOne({ cuponCode: req.body.cuponcode })

        if (!cuponCode) {
            res.status(404).json('Invalid Cupon Code')
        }
        else {
            res.status(200).json(cuponCode)
        }

    } catch (error) {
        res.status(500).json(error)
    }

}

const getAllCuponCodes = async (req, res) => {

    try {

        const cuponCodes = await CuponCodes.find()
        res.status(200).json(cuponCodes)

    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { addCuponCode, deleteCuponCode, validateCuponCode, getAllCuponCodes }