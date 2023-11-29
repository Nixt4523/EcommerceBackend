const Sale = require('../models/Sale')

const addSale = async (req, res) => {

    const newSale = new Sale(req.body)

    try {

        const savedSale = await newSale.save()
        res.status(200).json(savedSale)

    } catch (error) {
        res.status(500).json(error)
    }

}

const updateSale = async (req, res) => {

    try {

        const updatedSale = await Sale.findByIdAndUpdate(req.params.saleId, { $set: req.body }, { new: true })

        res.status(200).json(updatedSale)

    } catch (error) {
        res.status(500).json(error)
    }

}


const deleteSale = async (req, res) => {

    try {

        await Sale.findByIdAndDelete(req.params.saleId)
        res.status(200).json("Sale has been Deleted..!")

    } catch (error) {
        res.status(500).json(error)
    }

}

const getSale = async (req, res) => {

    try {

        const sale = await Sale.find({ isActive: true })

        res.status(200).json(sale)

    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { addSale, updateSale, deleteSale, getSale }