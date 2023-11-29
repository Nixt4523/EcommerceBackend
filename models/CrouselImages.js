const mongoose = require('mongoose')

const CrouselImagesSchema = new mongoose.Schema(
    {
        imageTitle: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        imageCategory: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("CrouselImages", CrouselImagesSchema)