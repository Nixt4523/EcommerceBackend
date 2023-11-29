const CrouselImages = require('../models/CrouselImages')

const addCrouselImage = async (req, res) => {

    const newCrouselImage = new CrouselImages(req.body)

    try {

        const savedCrouselImage = await newCrouselImage.save()
        res.status(200).json(savedCrouselImage)

    } catch (error) {
        res.status(500).json(error)
    }

}

const updateCrouselImage = async (req, res) => {

    try {

        const updatedCrouselImage = await CrouselImages.findByIdAndUpdate(req.params.crouselImageId, { $set: req.body }, { new: true })

        res.status(200).json(updatedCrouselImage)

    } catch (error) {
        res.status(500).json(error)
    }

}

const deleteCrouselImage = async (req, res) => {

    try {

        await CrouselImages.findByIdAndDelete(req.params.crouselImageId)
        res.status(200).json("Crousel Image has been Deleted..!")

    } catch (error) {
        res.status(500).json(error)
    }

}

const getCrouselImages = async (req, res) => {

    try {

        const crouselImages = await CrouselImages.find()
        res.status(200).json(crouselImages)

    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { addCrouselImage, updateCrouselImage, deleteCrouselImage, getCrouselImages }
